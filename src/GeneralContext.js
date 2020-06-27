// src/GeneralContext.js
 
import React from 'react';
 
/**
 * @typedef TGeneralContext
 * @property {any} competitionState
 * @property {'finished' | 'inprogress'} status
 * @property {Array} notificationActionsts
 */

/** @type {import('react').Context<TGeneralContext>} */
const GeneralContext = React.createContext({
    competitionState: {},
    notificationActionsts: [],
    status: 'finished'
});
 
export default GeneralContext;
