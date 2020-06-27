// src/ThemeContext.js
 
import React from 'react';
 
/**
 * @typedef TGeneralContext
 * @property {any} competitionState
 * @property {'finished' || 'inprogress'} status
 * @property {Array} notificationActionsts
 */

/** @type {import('react').Context<TGeneralContext>} */
const ThemeContext = React.createContext({ competitionState: {}, notificationActionsts: [], status: '' });
 
export default ThemeContext;
