function evalHelper(screenResult: string) {
  if(screenResult == null || screenResult == '' ) {
      return '';
  }
  
  if( containsHtml(screenResult) ) {
    //TODO: display errors?
    return '';
  }

  
  return eval(screenResult);

}

function addToScreen(value: string, calcScreenValue: string) {
  let lastCharIsZero = stringEndsWithZero(calcScreenValue);

  if( lastCharIsZero ) {
      let hexFixDisplay = calcScreenValue.slice(0,-1) + value;
      return hexFixDisplay;
  }
  
  return calcScreenValue += value;
}

function containsHtml(input: string) {
  let regexForHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;

  return regexForHTML.test(input);
}

function stringEndsWithZero(input: string) {
  if( input.length === 1 && input === "0") {
    return true;
  }

  let operator = detectOperator(input);
  if( operator !== 'unknown operator') {
    let inputSplit = input.split(operator);
    let lastSplit = inputSplit[inputSplit.length -1];

    if( lastSplit.slice(0,1) === "0" ) {
      return true;
    }

  }
  
  return false;
}

function detectOperator(expression) {
  if (expression.includes('+')) {
      return '+';
  } else if (expression.includes('-')) {
      return '-';
  } else if (expression.includes('*')) {
      return '*';
  } else if (expression.includes('/')) {
      return '/';
  } else {
      return 'unknown operator';
  }
}


export {evalHelper, containsHtml, stringEndsWithZero, addToScreen, detectOperator}