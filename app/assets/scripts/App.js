import MobileMenu from './modules/MobileMenu'
import RevealOnScoll from './modules/RevealOnScoll'
import $ from 'jquery'

var mobileMenu = new MobileMenu();

new RevealOnScoll($('.feature-item'), '85%');
new RevealOnScoll($('.testimonial'), '75%');