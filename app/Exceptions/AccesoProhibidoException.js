'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccesoProhibidoException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { reponse }) {
    return reponse.status(403).json({
      error: 'Acceso prohibido'
    });
  }
}

module.exports = AccesoProhibidoException
