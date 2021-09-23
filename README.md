# z3m3-json-data
## Aim of the Project

This project intends to represent modifications to the [Super Metroid/A Link to the Past Combination Randomizer](https://github.com/tewtal/SMZ3Randomizer).

## Project Structure

This project's representation of the combo is split-up between different folders, each with their own data. Here's a breakdown:

### A Link to the Past

[A folder for Z3](z3/z3-readme.md)

### Super Metroid

[A folder for SM](sm/sm-readme.md)

#### Regions

[A folder that details the game's rooms](region/region-readme.md)

#### Connections

[A folder that details connections between the game's rooms](connection/connection-readme.md)

#### Enemies

[A folder that details the game's enemies](enemies/enemies-readme.md)

#### Weapons

[A folder that details possible types of attacks](weapons/weapons-readme.md)

#### helpers.json

A file that defines helper functions. They are [logical requirement](logicalRequirements.md) expressions that are used frequently, and prevent having to copy the same thing all over the place.

#### items.json

A file that contains a lot of the initial game state configuration. It contains all existing items and game flags, as well as starting items, resources, game flags, open locks, and location.

#### tech.json

A file that contains techs and their [logical requirements](logicalRequirements.md). Techs are in-game techniques that players might want to be able to logically turn off.

## Important concepts

This section lists key concepts and links to deeper explanations of them.

### Logical Requirements

[Logical requirements define what Link/Samus needs to have and to do in order to perform actions](logicalRequirements.md)

### Strats

[Strats represent a series of maneuvers that need to be executed in a room/screen.](strats.md)
