//run using npx esrun connect-solana-cli 8ArBUPU96w4fDMSUNDyGgfK5ZhGMbqtRhpY9mUomSAck
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('devnet'));
console.log('Connected');

const argumentAddress = process.argv[2];
if (!argumentAddress) {
  throw new Error('Provide public key to check balance of');
}

//Checking if address is a valid address
PublicKey.isOnCurve(argumentAddress);

const address = new PublicKey(argumentAddress);
const balance = await connection.getBalance(address);
console.log('Balance(Sol): ' + balance / LAMPORTS_PER_SOL);
