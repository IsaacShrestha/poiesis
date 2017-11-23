
mod MYPROG* {
	protecting(NAT) -- predefined type: natural numbers
	[List] -- request list
	
	-- Defines 'token' that will be used for verification
	-- Operations are createToken, acceptToken, deleteToken, verifyToken.
	
	-- signatures
	op createToken : -> List
	op acceptToken : List Nat -> List
	op deleteToken : List Nat -> List
	op verifyToken : List Nat -> Bool
	op empty-Token : -> ?List  -- exception condition
	
	
	-- axioms
	var V : Nat
	var X : Nat
	var T : List
	
	eq verifyToken(createToken, V) = false .
	eq verifyToken(acceptToken(createToken,V),V) = true .
	eq verifyToken(acceptToken(createToken,X),V) = false .
	eq verifyToken(acceptToken(T,V),V) = true .	
	eq verifyToken(acceptToken(T,X),V) = verifyToken(T,V) .	
	
	eq deleteToken(createToken, V) = createToken .
	eq deleteToken(acceptToken(createToken,V),V) = createToken .
	eq deleteToken(acceptToken(T,V),V) = T .
	eq deleteToken(acceptToken(T,X),V) = acceptToken(deleteToken(T,V),X) .	

	
	
}
