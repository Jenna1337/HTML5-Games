
//TODO
function readFile(filePath)
{
	var output = ""; //placeholder for text output
	var reader;
	if(window.FileReader && window.Blob && window.File && filePath)
	{
		reader = new FileReader();
		reader.onload = function (e)
		{
			output = e.target.result;
			return output;
		};//end onload()
		reader.readAsText(new File(filePath);
	}//end if html5 filelist support
	else if(ActiveXObject && filePath)
	{
		try
		{
			reader = new ActiveXObject("Scripting.FileSystemObject");
			var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
			output = file.ReadAll()
			file.Close();
			return output;
		}
		catch(e)
		{
			if (e.number == -2146827859)
				alert('Unable to access local files due to browser security settings. ' + 
				 'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' + 
				 'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'); 
		}
	}
	else
	{
		reader = new XMLHttpRequest();
		var allText;
		reader.open("GET", filePath, false);
		reader.onreadystatechange = function ()
		{
			if(reader.readyState === 4)
				if(reader.status === 200 || reader.status == 0)
					allText = reader.responseText;
		}
		reader.send(null);
		return allText;
	}
	else
	{
		throw new Error("Could not read file "+filePath);
	}
			return readFileXMLHttp(filePath);
}
