#!/usr/bin


echo "sender : ${1}, receiver : ${2}, token : ${3}"

dpnmd tx bank send "$1" "$2" "$3" && echo "CBDC.sh called finished!"


dpnmd query bank balances "$1"

#https://docs.cosmos.network/master/run-node/run-node.html 참고