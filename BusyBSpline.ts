//Created by richardfuhr on 5/25/14.
//Copyright (C) 2014 Richard David Fuhr - All rights reserved. -->
//richard.fuhr@gmail.com

// I am not sure why BusyBSpline.ts is not showing up in SourceTree
// Oh; now it is.

// Richards-iMac:BusyBSpline richardfuhr$ tsc --help
// Version 1.0.1.0
// Syntax:   tsc [options] [file ..]

// Examples: tsc hello.ts
//           tsc --out foo.js foo.ts
//           tsc @args.txt

// Options:
//   -d, --declaration             Generates corresponding .d.ts file.
//   -h, --help                    Print this message.
//   --mapRoot LOCATION            Specifies the location where debugger should locate map files instead of generated locations.
//   -m KIND, --module KIND        Specify module code generation: 'commonjs' or 'amd'
//   --noImplicitAny               Warn on expressions and declarations with an implied 'any' type.
//   --out FILE                    Concatenate and emit output to single file.
//   --outDir DIRECTORY            Redirect output structure to the directory.
//   --removeComments              Do not emit comments to output.
//   --sourcemap                   Generates corresponding .map file.
//   --sourceRoot LOCATION         Specifies the location where debugger should locate TypeScript files instead of source locations.
//   -t VERSION, --target VERSION  Specify ECMAScript target version: 'ES3' (default), or 'ES5'
//   -v, --version                 Print the compiler's version: 1.0.1.0
//   -w, --watch                   Watch input files.
//   @<file>                       Insert command line options and files from a file.

class Point
{
	constructor(public x: number,
		        public y: number)
	{
		
	}
}
