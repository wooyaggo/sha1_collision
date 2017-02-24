const fs = require( "fs" );
const crypto = require( "crypto" );

function hash( $data )
{
	const sha1 = crypto.createHash( "sha1" );
	sha1.update( $data );

	return sha1.digest( "hex" );
}

const file1 = fs.readFileSync( "shattered-1.pdf" );
const file2 = fs.readFileSync( "shattered-2.pdf" );

const hash1 = hash( file1 );
const hash2 = hash( file2 );

console.log( "Hash 1 : " + hash1 );
console.log( "Hash 2 : " + hash2 );
console.log( "Assert : " + ( hash1 == hash2 ) );