'use strict'
import {Route, start} from "./router.js"

/**
 * Used to hold cached versions of used HTML templates.
 */
var htmlTemplateCache = new Map()


/**
 * Route constants.
 */
const ROUTE_HOME = '/'

/**
 * setting the default action 
 */
Route.setDefaultFunction(pageNotFound);

/**
 * Creating the routes for the app
 */
new Route(ROUTE_HOME, home)
    .setPreFunction(pre)
    .setFailFunction(fail);

/**
 * Clones an embedded HTML template, from the HTML file, via an id.
 */
function cloneHtmlTemplate(id) {
    let div = document.createElement('div');
    const template = document.querySelector(`#${id}`);
    const clone = template.content.cloneNode(true);
    div.appendChild(clone)
    return div
}

/**
 * Home route action.
 */
function home() {
    $('#view').html(cloneHtmlTemplate('template-hello'));
}

/**
 * Fail action.
 */
function fail() {
    $('#view').html(cloneHtmlTemplate('template-ups'));
}

/**
 * Pre action.
 */
function pre() {
    console.log("hello, world! from preFunction");
    return Math.round(Math.random())
}

/**
 * Default action.
 */
 function pageNotFound() {
    $('#view').html(cloneHtmlTemplate('template-404'));
}


start()