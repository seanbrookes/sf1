Simple Framework One is an application bootstrap project based on modular JavaScript patterns.  It is designed to be a turn-key
 application stub to get a developer up and running with an application as easily as possible.

- a jump off point
- dmonstrate the following
-- mongo db
-- Nodejs based rest web service
-- backbonejs (marionettejs) based front end
-- requires AMD dependency managment on the client
-- simple account / authentication implementation
-- modular JavaScript
-- event driven architecture

- use as much or as little of the framework

- decoupled front/back end so you can replace the front end with [insert your favorite MVC framework here]
-- see sf2

- it is an exploration of scalable, flexible full stack JavaScript application architecture.

- It is not a fully baked concept or a treatise on coding skill.  That being said the core concepts are considered robust there
has been not attempt to harden the application for production so issues such as packaging, building, security, etc are conspicuously
absent


 I use it to form the core of any projects I want to get up and running quickly and just start writing modules.

## Getting started
1) Install Mongodb
2) fork this repo
3) navigate to the sf1 directory
4) optional - edit the package.json/app-config files to change ports, app names, etc.
5) npm install

If everything goes according to plan you shold be able to bring up the app.

It is pretty bare bones so there isn't much 'application real-estate' when you begin.  This is just a jumpint off point.

## Features
- a slightly opinionated development model
- modular event driven JavaScript front end
- basic Nodejs/mongo backend
- simple account creation and authentication
- Grunt enabled
- Less / Bootstrap enabled


## Stack:
- mongo
- node
-- mongoose
-- express
- backbone
- marionette
- requirejs
- less CSS
- bootstrap (3)

## Features:
- turn-key modular js application engine - require / marionette  oriented
- account creation and authentication
- index/home/admin/application/security module stubs OOTB to get started
- Less CSS preprosessor available
- Kube CSS enabled (lightweight alternative to Bootstrap) - http://imperavi.com/kube/

## Backlog:
- unit tests

## Known Issues / Todo
- You have to have mondodb installed
- Currently the Winston logging module expects a 'logs' folder in the root of the project.  I haven't had time to set this configuration to turn off the dependency in a production deployment.
I'm sure it is straight forward but my work around to this point is simply include the folder in my deployments.
- change from cookie session to OAuth
- implement autosave

## road map
- archive/export
- dynamic page targeting
- dynamic host targeting

License: MIT
Attribution: Sean Brookes