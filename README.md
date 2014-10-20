# phplondon.org website

This project is built using [Jekyll] and is hosted using [GitHub pages]. If you want to contribute, just send fork us
and send us a pull request on GitHub that we will review and merge.

We welcome contributions to make the website better.

To test the changes before submitting them, we suggest these two ways:

## Using the already pre-configured ready-to-go Vagrant environment:

On the host computer, make sure you have the following requirements:
 - [Vagrant]
 - [VirtualBox]
 - A [Git client]
 - A [SSH client]

Using your Git client, clone this repository into your projects folder, for example, to clone it to the
`/projects/phplondon/` folder, you may write:

    git clone https://github.com/phplondon/phplondon.github.io.git /projects/phplondon/ --init --recursive

Open an elevated command prompt and (running as administrator/root) go to the folder where you downloaded the files,
for example:

    cd /projects/phplondon/

On the same console, start up the vagrant virtual machine:

    cd vagrant/
    vagrant up

Add the following line to your [hosts] file:

    127.0.0.1 phplondon.local

Finally, open an SSH console with the following information:
 - Host: `phplondon.local`
 - Port: `2222`
 - Username: `vagrant`
 - Password: `vagrant`

Once you are inside the SSH console, start up the Jekyll web server by writing:

    cd /var/www/phplondon
    jekyll serve --watch --force_polling

The development website will be accessible from your host computer via http://phplondon.local:4000/ using your favourite
browser.

## Using your own development environment

If you already are familiar with these technologies, just:

- Fork the project into a folder in your computer
- [Install Jekyll]
- [Start Jekyll]

[Jekyll]:         http://jekyllrb.com/
[GitHub pages]:   https://pages.github.com/

[Vagrant]:        https://www.vagrantup.com/downloads.html
[VirtualBox]:     https://www.virtualbox.org/wiki/Downloads
[Git client]:     http://git-scm.com/download/gui/linux
[SSH client]:     http://en.wikipedia.org/wiki/Comparison_of_SSH_clients
[hosts]:          http://www.rackspace.com/knowledge_center/article/how-do-i-modify-my-hosts-file

[Install Jekyll]: http://jekyllrb.com/docs/installation/
[Start Jekyll]:   http://jekyllrb.com/docs/usage/
