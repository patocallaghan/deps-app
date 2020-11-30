import Controller from '@ember/controller';
import _ from 'underscore';
import Highcharts from 'highcharts';
import lunr from 'lunr';
import { createPopper } from '@popperjs/core';
import parsePhoneNumber from 'libphonenumber-js'
import { inject as service } from '@ember/service';
import moment from 'moment';

export default class ApplicationController extends Controller {
  @service csv;

  init() {
    super.init(...arguments);
    console.log(`underscore`, _);
    console.log(`Highcharts`, Highcharts);
    console.log(`lunr`, lunr);
    console.log(`popperjs`, createPopper);
    console.log(`phonenumber`, parsePhoneNumber);
    console.log(`moment`, moment);
  }
}
