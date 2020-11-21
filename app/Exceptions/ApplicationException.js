'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
const { format } = require('winston');
const { combine, timestamp, prettyPrint, colorize, printf, splat, align } = format;
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});
let message = 'Ocorreu um erro ao processar essa solicitação.'
let status = 400
let code = 'BAD_REQUEST'

class ApplicationException extends LogicalException {
  constructor (newMessage = "", newStatus = 0, newCode = "") {
    if(newMessage != ""){
      message = newMessage;
    }
    if(newStatus > 0){
      status = newStatus;
    }
    if(newCode != ""){
      code = newCode;
    }
    super(message, status, code)
  }

  handle (error, { response }) {
    const Logger = use('Logger')
    Logger
      .transport('file')
      .error(message, error)
    response
      .status(status)
      .send(message)
  }
}

module.exports = ApplicationException
