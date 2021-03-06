// Dumps all of the entires stored in NSUserDefaults.

var NSUserDefaults = ObjC.classes.NSUserDefaults;

var data = NSUserDefaults.alloc().init().dictionaryRepresentation();

var response = {
    status: 'success',
    error_reason: NaN,
    type: 'nsuserdefaults-get',
    data: data.toString() 
}

send(JSON.stringify(response));

// -- Sample Objective-C
//
// NSUserDefaults *d = [[NSUserDefaults alloc] init];
// NSLog(@"%@", [d dictionaryRepresentation]);
