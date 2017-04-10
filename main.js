function setup()
{
	pinMode(1,OUTPUT);
	pinMode(2,INPUT);
	Serial.println("Wather and Pollution Monitor::::::");
}
function alarm()  //alarm
{
	customWrite(1,1);
	digitalWrite(2,HIGH);
	delay(500);
	customWrite(1,0);
	digitalWrite(2,LOW);
}


function loop()
{

	var temp=analogRead(A1);
	temp=Math.floor(map(temp,0,1023,-100,100));
	if(temp>0 && temp<40)
	{
	customWrite(0,"TEMPRATURE:" +temp +"C");

	Serial.println("Temp::" +temp);
		delay(500);
	}
		
	if(temp>40 && temp<50)
	{
		customWrite(0,"WARNING!!! " +temp+"C");

	    
			Serial.println("Temp::" +temp);
			alarm();

	}
	if(temp>50 || temp<0)
	{
			customWrite(0,"DANGER!!!" +temp+"C");
				   
					Serial.println("Temp::" +temp);
					 alarm();//control room alarm
					 
	}
	delay(500);
	var s=analogRead(A0);
	s=Math.floor(map(s,0,255,0,100));
	if(s>=0 && s<40)
	{
	Serial.println("SMOKE::" +s+"%");
		customWrite(0,"SMOKE:: " +s+"%");
	delay(500);
	}
	if(s>40)
	{
	customWrite(0,"SMOKE:: " +s+"%");
	Serial.println("SMOKE::" +s +"%");
	alarm();
	delay(500);
	}
	delay(500);
	var h=analogRead(A2); //humidity
	h=Math.floor(map(h,0,1023,0,100));
	if(h>=0 && h<80)
	{
	Serial.println("HUMIDITY::" +h+"%");
		customWrite(0,"HUMIDITY:: " +h+"%");
	delay(500);
	}
	if(h>80)
	{
	customWrite(0,"HUMIDITY:: " +h+"%");
	Serial.println("HUMIDITY:"+h+"%");
	alarm();
	delay(500);
	}
	
 userinfo();
delay(500);	
}
function userinfo()
	{
	  	
	  	customWrite(3,"Information\nGuide!!");
	  	
	}
