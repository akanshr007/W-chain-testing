/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockLiquidityPool,
  MockLiquidityPoolInterface,
} from "../../../contracts/MockLiquidityPool.sol/MockLiquidityPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address",
      },
    ],
    name: "getExchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5061080d8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635668870014610067578063a201ccf614610083578063a747b93b1461009f578063b8c876b1146100cf578063baaa61be146100ff578063df791e501461012f575b600080fd5b610081600480360381019061007c9190610539565b61014b565b005b61009d60048036038101906100989190610539565b6101a4565b005b6100b960048036038101906100b49190610579565b61027e565b6040516100c691906105b5565b60405180910390f35b6100e960048036038101906100e49190610579565b6102c6565b6040516100f691906105b5565b60405180910390f35b610119600480360381019061011491906105d0565b6102de565b60405161012691906105b5565b60405180910390f35b61014960048036038101906101449190610610565b610370565b005b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546101999190610692565b925050819055505050565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610225576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021c90610723565b60405180910390fd5b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102739190610743565b925050819055505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006020528060005260406000206000915090505481565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461036891906107a6565b905092915050565b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156103f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e890610723565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043f9190610743565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104949190610692565b92505081905550505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104d0826104a5565b9050919050565b6104e0816104c5565b81146104eb57600080fd5b50565b6000813590506104fd816104d7565b92915050565b6000819050919050565b61051681610503565b811461052157600080fd5b50565b6000813590506105338161050d565b92915050565b600080604083850312156105505761054f6104a0565b5b600061055e858286016104ee565b925050602061056f85828601610524565b9150509250929050565b60006020828403121561058f5761058e6104a0565b5b600061059d848285016104ee565b91505092915050565b6105af81610503565b82525050565b60006020820190506105ca60008301846105a6565b92915050565b600080604083850312156105e7576105e66104a0565b5b60006105f5858286016104ee565b9250506020610606858286016104ee565b9150509250929050565b600080600060608486031215610629576106286104a0565b5b6000610637868287016104ee565b9350506020610648868287016104ee565b925050604061065986828701610524565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061069d82610503565b91506106a883610503565b92508282019050808211156106c0576106bf610663565b5b92915050565b600082825260208201905092915050565b7f496e73756666696369656e74206c697175696469747900000000000000000000600082015250565b600061070d6016836106c6565b9150610718826106d7565b602082019050919050565b6000602082019050818103600083015261073c81610700565b9050919050565b600061074e82610503565b915061075983610503565b925082820390508181111561077157610770610663565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006107b182610503565b91506107bc83610503565b9250826107cc576107cb610777565b5b82820490509291505056fea26469706673582212201e658584381d8f12375fd82aaff2664dc057c79dab7bfc6cfd9f150c4c62d42364736f6c634300081c0033";

type MockLiquidityPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockLiquidityPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockLiquidityPool__factory extends ContractFactory {
  constructor(...args: MockLiquidityPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockLiquidityPool & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockLiquidityPool__factory {
    return super.connect(runner) as MockLiquidityPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockLiquidityPoolInterface {
    return new Interface(_abi) as MockLiquidityPoolInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockLiquidityPool {
    return new Contract(address, _abi, runner) as unknown as MockLiquidityPool;
  }
}
