export class AudioBox{muted=false;ctx?:AudioContext;
 private init(){this.ctx??=new AudioContext();if(this.ctx.state==='suspended')this.ctx.resume()}
 tone(freq:number,d=.08,type:OscillatorType='square',end=freq){if(this.muted)return;this.init();const c=this.ctx!,o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(freq,c.currentTime);o.frequency.exponentialRampToValueAtTime(Math.max(40,end),c.currentTime+d);g.gain.setValueAtTime(.05,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.connect(g).connect(c.destination);o.start();o.stop(c.currentTime+d)}
 blip(){this.tone(540,.06)} pop(){this.tone(260,.08,'square',520)} type(){this.tone(760,.025)} good(){this.tone(440,.14,'square',880);setTimeout(()=>this.tone(660,.12),80)} bad(){this.tone(180,.25,'sawtooth',70)} cash(){[660,880,1100].forEach((n,i)=>setTimeout(()=>this.tone(n,.08),i*60))} bankrupt(){this.tone(220,.6,'sawtooth',45)}
 toggle(){this.muted=!this.muted;if(!this.muted)this.blip();return this.muted}
}
