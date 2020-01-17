

let items = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

runLoop = async () => {
  for ( const item of items ) {
    await new Promise( resolve => setTimeout( resolve, 1000 ) )
    console.log(item)
  }
}

runLoop()