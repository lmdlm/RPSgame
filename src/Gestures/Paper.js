//Import dependencies
import {Finger, FingerCurl, GestureDescription} from 'fingerpose';

//Define gesture description
export const paperGesture = new GestureDescription("paper");

//Thumb position
paperGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)

//Index position
paperGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)

//Middle position
paperGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

//Ring position
paperGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)

//Pinky position
paperGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)