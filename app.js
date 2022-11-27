'use strict'
import {Route, start} from "./router.js"

/**
 * Route constants.
 */
const ROUTE_HOME = '/'
const ROUTE_PARAM = '/params/{1}/{2}'

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

new Route(ROUTE_PARAM, params);

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
 * Param function
 */
function params(first, second) {
    $('#view').html(cloneHtmlTemplate('template-params'));
    $('#first').html(first);
    $('#second').html(second);
}

/**
 * Default action.
 */
 function pageNotFound() {
    $('#view').html(cloneHtmlTemplate('template-404'));
}


start()