import React from "react";
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    textSize=".6em"
    code={`var Dispatcher = require(\'flux\').Dispatcher; \n`+
          `var AppDispatcher = new Dispatcher();\n`+
          'AppDispatcher.handleViewAction = function(action) {\n'+
            'this.dispatch({\n'+
            '  source: \'VIEW_ACTION\',\n'+
              'action: action\n'+
            '});\n' +
            '}\n\n'+
            'module.exports = AppDispatcher;'
          }
    ranges={[
      { loc: [0, 1], note: "Importing flux Dispatcher" },
      { loc: [2, 3] }, //TodoList Component
      { loc: [4, 10], title: "Contructor Method" }
    ]}
    />
);
