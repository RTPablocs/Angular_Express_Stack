from colorama.ansi import Back, Style
import docker
import time
import argparse
from colorama import Fore


containers = ['express_container', 'angular_container']
images = ['angular_image', 'express_image']
client = docker.from_env()

parser = argparse.ArgumentParser(
    description='Automatic Docker project deployer')
parser.add_argument('--path', help='Sets the path for image building')
parser.add_argument(
    '--mode', help='Sets the mode for usage, [deploy, clean, stop, stop:all, start, list, build]')
parser.add_argument('--name', help='Sets the name for images or containers')


def run_all_containers(*args):
    start_time = time.time()
    for container, image in zip(containers, images):
        try:
            client.containers.run(image, detach=True, name=container)

        except docker.errors.APIError:
            print('Conflict with', container +
                  ', Does the container exists or is running?')

    print('Execution Complete, took', time.time()-start_time, 'seconds')
    list_containers()


def list_containers(*args):
    for container in client.containers.list(all=True):
        if container.name in containers:
            if container.status == 'exited':
                print(container.id[0:12], container.name,
                      Fore.RED + container.status + Style.RESET_ALL)
            else:
                print(container.id[0:12], container.name,
                      Fore.GREEN + container.status + Style.RESET_ALL)


def start_container(*args):
    client.containers.start(args[0])
    list_containers()


def stop_container(*args):
    client.containers.get(args[0]).stop()
    list_containers()
    print('Container:', args[0], 'stopped')


def stop_everything(*args):
    for name in containers:
        container = client.containers.get(name)
        container.stop()
    list_containers()
    print('Everything stopped')


def make_clean_exit(*args):
    stop_everything()
    client.containers.prune()
    print(Back.RED+'Prune complete'+Style.RESET_ALL)


def build_image(*args):
    client.images.build(path=args[1], tag=args[0])
    client.images.list()


args = parser.parse_args()

commands = {
    'build': build_image,
    'clean': make_clean_exit,
    'stop:all': stop_everything,
    'stop': stop_container,
    'start': start_container,
    'deploy': run_all_containers,
    'list': list_containers
}

commands[args.mode](args.name, args.path)
