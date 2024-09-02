import { Keypair } from '@solana/web3.js';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import dotenv from 'dotenv';
dotenv.config();

// const keypair = Keypair.generate();
// console.log(process.env.SECRET_KEY);
const keypair = getKeypairFromEnvironment('SECRET_KEY');

// console.log({ keypair });
console.log(keypair.publicKey.toBase58());
console.log(keypair.secretKey.toString());
