# **ENTERPRISE WRAP DRIVE MANAGEMENT**

Enterprise Wrap Drive management exercise developed with NodeJS and ES6

## **Getting Started**

This project needs NPM and NodeJS > 8 in order to work.

To install dependencies run the following command inside project directory:

``` sh
npm install
```

## **Running the App**

To run the app just execute the following command:

``` sh
node index.js --injectors 20 10 0 --lightspeed 100
```

Where:

* First `injectors` argument is damage percentage of first plasma injector
* Second `injectors` argument is damage percentage of second injector
* Third `injectors` argument is damage percentage of third injector
* `lightspeed` argument and last argument is light speed percentage

The output should be something like this:

``` sh
|----------------------------------------------------|
|---------- ENTERPRISE WRAP DRIVE MANAGEMENT --------|
|----------------------------------------------------|
|  Plasma Injectors (A, B, C)                        |
|----------------------------------------------------|
|  A: 90mg/s   |  B: 100mg/s   |  C: 110mg/s
|----------------------------------------------------|
| Remaining working time: 90 minutes
|----------------------------------------------------|
```

## **Running the Tests**

To run the entire test suite run the following command:

``` sh
npm test
```

Which should generate this output:

``` sh
enterprise-wrap-drive-management@1.0.0 test /enterprise-wrap-drive-management
> mocha spec



  PlasmaInjector
    ✓ should return proper initialized damage value
    ✓ should return proper max undefined plasma flow
    ✓ should return infinite remaining working time in minutes when no extra plasma flow is provided
    ✓ should return proper remaining travel working time in minutes when extra plasma flow is provided
    ✓ should return proper remaining travel working time in minutes when extra plasma flow is provided and has some damage
    ✓ should return proper remaining travel working time in minutes when extra plasma flow is provided and it is almost totally damaged
    ✓ should return no remaining travel working time in minutes is 100% damaged
    ✓ should return max plasma flow when using 99% extra power

  PlasmaReactor
    ✓ should receive an array as constructor parameter
    ✓ should throw an exception when an array is not provided as constructor parameter
    ✓ should return plasma flow array for injectors and remaining time for case #1
    ✓ should return plasma flow array for injectors and remaining time for case #2
    ✓ should return plasma flow array for injectors and remaining time for case #3
    ✓ should return plasma flow array for injectors and remaining time for case #4
    ✓ should return plasma flow array for injectors and remaining time for case #5
    ✓ should return plasma flow array for injectors and remaining time for case #6
    ✓ should return plasma flow array for injectors and remaining time for case #7
    ✓ should return plasma flow array for injectors and remaining time for case #8
    ✓ should return proper plasma flow array for injectors and remaining time when injectors are working at half of power
    ✓ should return proper plasma flow array for injectors and remaining time when when not enough power


  20 passing (12ms)
```