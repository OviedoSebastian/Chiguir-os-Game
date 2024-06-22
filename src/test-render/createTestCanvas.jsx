// src/utils/createCanvas.js
export const createCanvas = ({ beforeReturn, width = 1280, height = 800 } = {}) => {
    let canvas;
  
    if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
      canvas = document.createElement('canvas');
    } else {
      canvas = {
        style: {},
        addEventListener: () => {},
        removeEventListener: () => {},
        clientWidth: width,
        clientHeight: height,
        getContext: () => {
          return {
            fillRect: () => {},
            clearRect: () => {},
            getImageData: (x, y, w, h) => ({
              data: new Array(w * h * 4)
            }),
            putImageData: () => {},
            createImageData: () => [],
            setTransform: () => {},
            drawImage: () => {},
            save: () => {},
            fillText: () => {},
            restore: () => {},
            beginPath: () => {},
            moveTo: () => {},
            lineTo: () => {},
            closePath: () => {},
            stroke: () => {},
            translate: () => {},
            scale: () => {},
            rotate: () => {},
            arc: () => {},
            fill: () => {},
            measureText: () => ({ width: 0 }),
            transform: () => {},
            rect: () => {},
            clip: () => {},
          };
        },
        width,
        height,
      };
    }
  
    canvas.width = width;
    canvas.height = height;
  
    if (globalThis.HTMLCanvasElement) {
      const getContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (id) {
        if (id.startsWith('webgl')) return canvas.getContext('2d');
        return getContext.apply(this, arguments);
      };
    }
  
    if (beforeReturn) {
      beforeReturn(canvas);
    }
  
    globalThis.WebGLRenderingContext = globalThis.WebGLRenderingContext || canvas.getContext('2d').constructor;
    globalThis.WebGL2RenderingContext = globalThis.WebGLRenderingContext;
  
    return canvas;
  };
  