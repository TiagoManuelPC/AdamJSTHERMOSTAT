'use strict';

class Thermostat{
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.temp = 20;
    this.MIN_TEMP = 10;
    this.MAX_TEMP = 25;
    this.CLIMATE_CHANGE_YEAH_BABY_TEMP = 32;
    this.power_save = true;
    this.LOW_ENERGY_USAGE = 18;
    this.MEDIUM_ENERGY_USAGE = 25;
  }


  powerSaveOn() {
    return (this.power_save = true);
  }

  powerSaveOff() {
    return (this.power_save = false);
  }

  currentTemp() {
    return this.temp;
  }

  increaseTemp() {
    if (this.isMaxTemp()) {
      return;
    }
    this.temp += 1;
  }

  decreaseTemp() {
    if (this.isMinTemp()) {
      return;
    }
    this.temp -= 1;
  }

  resetTemp() {
    return (this.DEFAULT_TEMP);
  }

  isMinTemp () {
    return (this.temp === this.MIN_TEMP);
  }

  isMaxTemp () {
    if (this.power_save === true) {
      return (this.temp === this.MAX_TEMP);
    }
    else if (this.power_save === false) {
      return (this.temp === this.CLIMATE_CHANGE_YEAH_BABY_TEMP);
    }
    return (this.temp === this.MAX_TEMP);
  }

  energyReading() {
    if (this.temp < this.LOW_ENERGY_USAGE) {
      return 'low';
    }
    else if (this.temp <= this.MEDIUM_ENERGY_USAGE) {
      return 'medium';
    }
    else {
      return 'high';
    }
  }
}
