//Import dependencies
import {Finger, FingerCurl, GestureDescription} from 'fingerpose';

//Define gesture description
export const rockGesture = new GestureDescription("rock");

//Thumb position
rockGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)

//Index position
rockGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)

//Middle position
rockGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)

//Ring position
rockGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)

//Pinky position
rockGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)