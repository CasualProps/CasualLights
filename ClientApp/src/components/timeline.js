
import * as Constants from '../constants/constants';
import * as Layer from './layer';

function Timeline() {
    this.Length = 3000;
    this.CurrentTime = 0;
    this.StepLength = 50;
    this.Layers = [new Layer.Layer()];
}