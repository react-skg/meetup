import createTheme from "spectacle/lib/themes/default";

export const theme = createTheme({
  primary: "#4286f4",
  secondary: "blue"
});

export default {
  theme
};

// Example
// {
//    "theme": {
//       "screen": {
//          "colors": {
//             "primary": "#4286f4",
//             "secondary": "blue",
//             "tertiary": "white",
//             "quartenary": "white"
//          },
//          "fonts": {
//             "primary": "Helvetica",
//             "secondary": "Aquafina Script",
//             "tertiary": "monospace"
//          },
//          "googleFonts": {
//             "secondary": {
//                "name": "Aquafina Script",
//                "googleFont": true,
//                "styles": [
//                   "400",
//                   "700i"
//                ]
//             }
//          },
//          "global": {
//             "body": {
//                "background": "#4286f4",
//                "fontFamily": "Helvetica",
//                "fontWeight": "normal",
//                "fontSize": "2em",
//                "color": "blue",
//                "overflow": "hidden"
//             },
//             "html, body": {
//                "height": "100%"
//             },
//             "*": {
//                "boxSizing": "border-box"
//             }
//          },
//          "fullscreen": {
//             "fill": "white"
//          },
//          "controls": {
//             "prev": {
//                "position": "absolute",
//                "top": "50%",
//                "left": 20,
//                "transform": "translateY(-50%)",
//                "zIndex": 9999,
//                "background": "none",
//                "border": "none",
//                "outline": 0
//             },
//             "prevIcon": {
//                "fill": "white"
//             },
//             "next": {
//                "position": "absolute",
//                "top": "50%",
//                "right": 20,
//                "transform": "translateY(-50%)",
//                "zIndex": 9999,
//                "background": "none",
//                "border": "none",
//                "outline": 0
//             },
//             "nextIcon": {
//                "fill": "white"
//             }
//          },
//          "progress": {
//             "pacman": {
//                "container": {
//                   "position": "absolute",
//                   "bottom": "5px",
//                   "left": "50%",
//                   "transition": "all 1s ease-in-out 0.2s",
//                   "zIndex": 1000
//                },
//                "pacman": {
//                   "position": "absolute",
//                   "transition": "left 0.3s ease-in-out 0.2s",
//                   "width": "20px",
//                   "height": "20px",
//                   "transform": "translate(-5px, -5px)"
//                },
//                "pacmanTop": {
//                   "position": "absolute",
//                   "content": "",
//                   "width": "20px",
//                   "height": "10px",
//                   "borderTopLeftRadius": "10px",
//                   "borderTopRightRadius": "10px",
//                   "background": "white"
//                },
//                "pacmanBottom": {
//                   "position": "absolute",
//                   "content": "",
//                   "width": "20px",
//                   "height": "10px",
//                   "borderBottomLeftRadius": "10px",
//                   "borderBottomRightRadius": "10px",
//                   "background": "white",
//                   "top": "10px"
//                },
//                "point": {
//                   "position": "absolute",
//                   "float": "left",
//                   "background": "transparent",
//                   "width": "10px",
//                   "height": "10px",
//                   "borderWidth": 2,
//                   "borderStyle": "solid",
//                   "borderColor": "white",
//                   "borderRadius": "50%",
//                   "transition": "all 0.01s ease-out 0.4s"
//                }
//             },
//             "bar": {
//                "container": {
//                   "position": "absolute",
//                   "height": "10px",
//                   "width": "100%",
//                   "bottom": 0,
//                   "left": 0,
//                   "transition": "all 1s ease-in-out 0.2s",
//                   "zIndex": 1000
//                },
//                "bar": {
//                   "height": "100%",
//                   "background": "white",
//                   "transition": "all 0.3s ease-out"
//                }
//             },
//             "number": {
//                "container": {
//                   "position": "absolute",
//                   "bottom": 10,
//                   "right": 10,
//                   "zIndex": 1000,
//                   "color": "white"
//                }
//             }
//          },
//          "components": {
//             "blockquote": {
//                "textAlign": "left",
//                "position": "relative",
//                "display": "inline-block",
//                "margin": 20
//             },
//             "quote": {
//                "borderLeft": "1px solid #4286f4",
//                "paddingLeft": 40,
//                "display": "block",
//                "color": "#4286f4",
//                "fontSize": "4.9rem",
//                "lineHeight": 1,
//                "fontWeight": "bold"
//             },
//             "cite": {
//                "color": "white",
//                "display": "block",
//                "clear": "left",
//                "fontSize": "2rem",
//                "marginTop": "1rem"
//             },
//             "content": {
//                "margin": "0 auto",
//                "textAlign": "center"
//             },
//             "codePane": {
//                "pre": {
//                   "margin": "auto",
//                   "fontSize": "0.8rem",
//                   "fontWeight": "normal",
//                   "fontFamily": "monospace",
//                   "minWidth": "100%",
//                   "maxWidth": 800
//                },
//                "code": {
//                   "textAlign": "left",
//                   "fontWeight": "normal"
//                }
//             },
//             "code": {
//                "color": "black",
//                "fontSize": "2.66rem",
//                "fontFamily": "monospace",
//                "margin": "0.25rem auto",
//                "backgroundColor": "rgba(0,0,0,0.15)",
//                "padding": "0 10px",
//                "borderRadius": 3
//             },
//             "heading": {
//                "h1": {
//                   "color": "white",
//                   "fontSize": "7.05rem",
//                   "fontFamily": "Helvetica",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": 0,
//                   "zoom": 1
//                },
//                "h2": {
//                   "color": "blue",
//                   "fontSize": "5.88rem",
//                   "fontFamily": "Helvetica",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": 0
//                },
//                "h3": {
//                   "color": "black",
//                   "fontSize": "4.9rem",
//                   "fontFamily": "Aquafina Script",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                },
//                "h4": {
//                   "color": "black",
//                   "fontSize": "3.82rem",
//                   "fontFamily": "Helvetica",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                },
//                "h5": {
//                   "color": "black",
//                   "fontSize": "3.19rem",
//                   "fontFamily": "Helvetica",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                },
//                "h6": {
//                   "color": "black",
//                   "fontSize": "2.66rem",
//                   "fontFamily": "Helvetica",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                }
//             },
//             "image": {
//                "display": "block",
//                "margin": "0.5rem auto"
//             },
//             "link": {
//                "textDecoration": "none"
//             },
//             "listItem": {
//                "fontSize": "2.66rem"
//             },
//             "list": {
//                "textAlign": "left",
//                "listStylePosition": "inside",
//                "padding": 0
//             },
//             "s": {
//                "strikethrough": {}
//             },
//             "tableHeaderItem": {
//                "fontSize": "2.66rem",
//                "fontWeight": "bold"
//             },
//             "tableItem": {
//                "fontSize": "2.66rem"
//             },
//             "table": {
//                "width": "100%"
//             },
//             "text": {
//                "color": "black",
//                "fontSize": "2.66rem",
//                "fontFamily": "Helvetica",
//                "margin": "0.25rem auto"
//             }
//          }
//       },
//       "print": {
//          "colors": {
//             "primary": "black",
//             "secondary": "black",
//             "tertiary": "black",
//             "quartenary": "black"
//          },
//          "fonts": {
//             "primary": "Open Sans Condensed",
//             "secondary": "Lobster Two",
//             "tertiary": "monospace"
//          },
//          "global": {
//             "body": {
//                "background": "white",
//                "fontFamily": "Open Sans Condensed",
//                "fontWeight": "normal",
//                "fontSize": "2em",
//                "color": "black",
//                "overflow": "hidden"
//             },
//             ".hljs": {
//                "background": "white",
//                "color": "black"
//             },
//             ".hljs span": {
//                "color": "black !important"
//             }
//          },
//          "fullscreen": {
//             "fill": "black"
//          },
//          "controls": {
//             "prev": {
//                "position": "absolute",
//                "top": "50%",
//                "left": 20,
//                "transform": "translateY(-50%)",
//                "zIndex": 9999,
//                "background": "none",
//                "border": "none",
//                "outline": 0
//             },
//             "prevIcon": {
//                "fill": "black"
//             },
//             "next": {
//                "position": "absolute",
//                "top": "50%",
//                "right": 20,
//                "transform": "translateY(-50%)",
//                "zIndex": 9999,
//                "background": "none",
//                "border": "none",
//                "outline": 0
//             },
//             "nextIcon": {
//                "fill": "black"
//             }
//          },
//          "progress": {
//             "pacman": {
//                "container": {
//                   "position": "absolute",
//                   "bottom": "5px",
//                   "left": "50%",
//                   "transition": "all 1s ease-in-out 0.2s",
//                   "zIndex": 1000
//                },
//                "pacman": {
//                   "position": "absolute",
//                   "transition": "left 0.3s ease-in-out 0.2s",
//                   "width": "20px",
//                   "height": "20px",
//                   "transform": "translate(-5px, -5px)"
//                },
//                "pacmanTop": {
//                   "position": "absolute",
//                   "content": " ",
//                   "width": "20px",
//                   "height": "10px",
//                   "borderTopLeftRadius": "10px",
//                   "borderTopRightRadius": "10px",
//                   "background": "black"
//                },
//                "pacmanBottom": {
//                   "position": "absolute",
//                   "content": " ",
//                   "width": "20px",
//                   "height": "10px",
//                   "borderBottomLeftRadius": "10px",
//                   "borderBottomRightRadius": "10px",
//                   "background": "black",
//                   "top": "10px"
//                },
//                "point": {
//                   "position": "absolute",
//                   "float": "left",
//                   "background": "transparent",
//                   "width": "10px",
//                   "height": "10px",
//                   "borderWidth": 2,
//                   "borderStyle": "solid",
//                   "borderColor": "black",
//                   "borderRadius": "50%",
//                   "transition": "all 0.01s ease-out 0.4s"
//                }
//             },
//             "bar": {
//                "container": {
//                   "position": "absolute",
//                   "height": "10px",
//                   "width": "100%",
//                   "bottom": 0,
//                   "left": 0,
//                   "transition": "all 1s ease-in-out 0.2s",
//                   "zIndex": 1000
//                },
//                "bar": {
//                   "height": "100%",
//                   "background": "black",
//                   "transition": "all 0.3s ease-out"
//                }
//             },
//             "number": {
//                "container": {
//                   "position": "absolute",
//                   "bottom": 10,
//                   "right": 10,
//                   "zIndex": 1000,
//                   "color": "black"
//                }
//             }
//          },
//          "components": {
//             "blockquote": {
//                "textAlign": "left",
//                "position": "relative",
//                "display": "inline-block"
//             },
//             "quote": {
//                "borderLeft": "1px solid black",
//                "paddingLeft": 40,
//                "display": "block",
//                "color": "black",
//                "fontSize": "4.9rem",
//                "lineHeight": 1,
//                "fontWeight": "bold"
//             },
//             "cite": {
//                "color": "black",
//                "display": "block",
//                "clear": "left",
//                "fontSize": "2rem",
//                "marginTop": "1rem"
//             },
//             "content": {
//                "margin": "auto",
//                "textAlign": "center"
//             },
//             "codePane": {
//                "pre": {
//                   "maxWidth": 800,
//                   "margin": "auto",
//                   "fontSize": "0.8rem",
//                   "fontWeight": "normal",
//                   "fontFamily": "monospace"
//                },
//                "code": {
//                   "textAlign": "left",
//                   "padding": 20,
//                   "fontWeight": "normal"
//                }
//             },
//             "code": {
//                "color": "black",
//                "fontSize": "2.66rem",
//                "fontFamily": "monospace",
//                "margin": "0.25rem auto",
//                "backgroundColor": "rgba(0,0,0,0.15)",
//                "padding": "0 10px",
//                "borderRadius": 3
//             },
//             "heading": {
//                "h1": {
//                   "color": "black",
//                   "fontSize": "7.05rem",
//                   "fontFamily": "Open Sans Condensed",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": 0
//                },
//                "h2": {
//                   "color": "black",
//                   "fontSize": "5.88rem",
//                   "fontFamily": "Open Sans Condensed",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": 0
//                },
//                "h3": {
//                   "color": "black",
//                   "fontSize": "4.9rem",
//                   "fontFamily": "Lobster Two",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                },
//                "h4": {
//                   "color": "black",
//                   "fontSize": "3.82rem",
//                   "fontFamily": "Open Sans Condensed",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                },
//                "h5": {
//                   "color": "black",
//                   "fontSize": "3.19rem",
//                   "fontFamily": "Open Sans Condensed",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                },
//                "h6": {
//                   "color": "black",
//                   "fontSize": "2.66rem",
//                   "fontFamily": "Open Sans Condensed",
//                   "lineHeight": 1,
//                   "fontWeight": "bold",
//                   "margin": "0.5rem auto"
//                }
//             },
//             "image": {
//                "display": "block",
//                "margin": "0.5rem auto"
//             },
//             "link": {
//                "textDecoration": "none"
//             },
//             "listItem": {
//                "fontSize": "2.66rem"
//             },
//             "list": {
//                "textAlign": "left",
//                "listStylePosition": "inside",
//                "padding": 0
//             },
//             "s": {
//                "strikethrough": {}
//             },
//             "tableHeaderItem": {
//                "fontSize": "2.66rem",
//                "fontWeight": "bold"
//             },
//             "tableItem": {
//                "fontSize": "2.66rem"
//             },
//             "table": {
//                "width": "100%"
//             },
//             "text": {
//                "color": "black",
//                "fontSize": "2.66rem",
//                "fontFamily": "Open Sans Condensed",
//                "margin": "0.25rem auto"
//             }
//          }
//       }
//    }
// }
