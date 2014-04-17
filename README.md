# algrant.ca

These are the source files for my [portfolio site][mysite]. 

## Download the source

Using git, clone this repository onto your own system:

    git clone https://algrant@github.com/algrant/algrant.ca.git

## Installation

This site uses the [wok static website generator][woksite] created by [Mike Cooper][mikesite]. You can install it on your system using [pip][pip]:

    sudo pip install wok

Next, make a copy of the `config.dist` file in the project rood directory and call it `config`. This is the wok configuration file for this site. Edit it to suit your own needs.

    cp config.dist config

# Generating the site

Make sure you're in the root project directory, and run wok:

    cd robmd.net
    wok

By default, files will be generated in the `output` directory in the project root. Point your web server at the directory, and you're set!

# This readme
Was lifted and modified from the [source code][robmd-source] for [robatron's site][robmd].

#TODO

* Redo theme/template to get rid of skel.js dependency
* Put comments back in once skel.js is gone
* Make hinge tessellation app mobile friendly..? Or make fail cleanly!
* More articles!

[mysite]: http://algrant.ca
[woksite]: https://github.com/mythmon/wok
[mikesite]: https://github.com/mythmon
[pip]: http://pypi.python.org/pypi/pip
[robmd-source]: https://github.com/robatron/robmd.net
[robmd]: http://robmd.net