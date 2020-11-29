import Controller from '@ember/controller';
import _ from 'underscore';
import Highcharts from 'highcharts';
import lunr from 'lunr';
import { createPopper } from '@popperjs/core';
import parsePhoneNumber from 'libphonenumber-js'

export default class ApplicationController extends Controller {
  @service csv;
}
