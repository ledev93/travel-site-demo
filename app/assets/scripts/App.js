import MobileMenu from './modules/MobileMenu'
import RevealOnScoll from './modules/RevealOnScoll'
import StickyHeader from './modules/StickyHeader'
import $ from 'jquery'

var mobileMenu = new MobileMenu();

new RevealOnScoll($('.feature-item'), '85%');
new RevealOnScoll($('.testimonial'), '75%');
var stickyHeader = new StickyHeader();