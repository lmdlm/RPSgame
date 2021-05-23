//Import dependencies
import {Finger, FingerCurl, GestureDescription} from 'fingerpose';

//Define gesture description
export const scissorsGesture = new GestureDescription("scissors");

//Thumb position
scissorsGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)

//Index position
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)

//Middle position
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

//Ring position
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)

//Pinky position
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)