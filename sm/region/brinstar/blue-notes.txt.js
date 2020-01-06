// Blue Brinstar
/*

[
  { "op": "replace",  "path": "$..rooms[?(@.name=='Construction Zone')]..nodes[?(@.name=='Right Door')].nodeSubType", "value": "blue" },
  { "op": "remove",   "path": "$..rooms[?(@.name=='Construction Zone')]..nodes[?(@.name=='Right Door')].locks" },
  { "op": "add",      "path": "$..rooms[?(@.name=='Construction Zone')]..nodes[?(@.name=='Right Door')].note", "value": "Z3M3: Door is changed to Blue." }
]

*/
