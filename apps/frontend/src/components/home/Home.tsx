import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { instruction } from './instruction';
import { Canvas } from 'react-design-editor';
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const importJSON = async (
  //   json: any,
  //   callback?: (canvas: fabric.Canvas) => void
  // ) => {
  //   if (typeof json === 'string') {
  //     json = JSON.parse(json);
  //   }
  //   let prevLeft = 0;
  //   let prevTop = 0;
  //   // this.canvas.setBackgroundColor(
  //   //   this.canvasOption.backgroundColor,
  //   //   this.canvas.renderAll.bind(this.canvas)
  //   // );
  //   const workarea = json.find((obj: any) => obj.id === 'workarea');
  //   if (!this.workarea) {
  //     this.workareaHandler.initialize();
  //   }
  //   if (workarea) {
  //     prevLeft = workarea.left;
  //     prevTop = workarea.top;
  //     this.workarea.set(workarea);
  //     await this.workareaHandler.setImage(workarea.src, true);
  //     this.workarea.setCoords();
  //   } else {
  //     this.canvas.centerObject(this.workarea);
  //     this.workarea.setCoords();
  //     prevLeft = this.workarea.left;
  //     prevTop = this.workarea.top;
  //   }
  //   json.forEach((obj: FabricObjectOption) => {
  //     if (obj.id === 'workarea') {
  //       return;
  //     }
  //     const canvasWidth = this.canvas.getWidth();
  //     const canvasHeight = this.canvas.getHeight();
  //     const { width, height, scaleX, scaleY, layout, left, top } =
  //       this.workarea;
  //     if (layout === 'fullscreen') {
  //       const leftRatio = canvasWidth / (width * scaleX);
  //       const topRatio = canvasHeight / (height * scaleY);
  //       obj.left *= leftRatio;
  //       obj.top *= topRatio;
  //       obj.scaleX *= leftRatio;
  //       obj.scaleY *= topRatio;
  //     } else {
  //       const diffLeft = left - prevLeft;
  //       const diffTop = top - prevTop;
  //       obj.left += diffLeft;
  //       obj.top += diffTop;
  //     }
  //     if (obj.superType === 'element') {
  //       obj.id = uuid();
  //     }
  //     this.add(obj, false, true);
  //     this.canvas.renderAll();
  //   });
  //   this.objects = this.getObjects();
  //   if (callback) {
  //     callback(this.canvas);
  //   }
  //   return Promise.resolve(this.canvas);
  // };

  useEffect(() => {
    const Canvas = new fabric.Canvas(canvasRef.current, {});
    const triangle = new fabric.Triangle({ selectable: false });
    Canvas.on('mouse:down', function (opt) {
      Canvas.relativePan(opt.e);
    });
    Canvas.on('mouse:wheel', function (opt) {
      var delta = opt.e.deltaY;
      var zoom = Canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      Canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
      var vpt = Canvas.viewportTransform!;
      if (zoom < 400 / 1000) {
        vpt[4] = 200 - (1000 * zoom) / 2;
        vpt[5] = 200 - (1000 * zoom) / 2;
      } else {
        if (vpt[4] >= 0) {
          vpt[4] = 0;
        } else if (vpt[4] < Canvas.getWidth() - 1000 * zoom) {
          vpt[4] = Canvas.getWidth() - 1000 * zoom;
        }
        if (vpt[5] >= 0) {
          vpt[5] = 0;
        } else if (vpt[5] < Canvas.getHeight() - 1000 * zoom) {
          vpt[5] = Canvas.getHeight() - 1000 * zoom;
        }
      }
    });
    // remove workarea object from objects
    const objects = instruction.objects.filter(
      (obj: any) => obj.id !== 'workarea' || true
    );

    // lock all edit controls
    const lockedObjects = objects.map((obj: any) => {
      return {
        ...obj,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        selectable: false,
      };
    });

    instruction.objects = lockedObjects;
    Canvas.loadFromJSON(instruction, () => {});
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
      >
        <canvas
          ref={canvasRef}
          width="1000px"
          height="1000px"
          style={{ border: '1px solid black' }}
        />
      </div>
    </>
  );
}
