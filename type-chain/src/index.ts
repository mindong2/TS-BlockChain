/* 
  npm 패키지 다운받을때 Definition type을 정리해놓은 사이트 
  DefinitelyTyped
  TypeScript type 정의를 위한 리포지토리입니다.
  https://github.com/DefinitelyTyped/DefinitelyTyped
  npm i @types/node -D 와 같이 가능
*/
import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number; //블록의 위치
  data: string;
}

class Block implements BlockShape {
  hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    const resultHash = crypto.createHash("sha256").update(toHash).digest("hex");
    return resultHash;
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }

  public getBlocks() {
    console.log([...this.blocks]); // 데이터는 같지만 저장 주소가 다른 카피본
  }
}

const blockchain = new BlockChain();
blockchain.addBlock("first block");
blockchain.addBlock("second block");
blockchain.addBlock("third block");
blockchain.addBlock("fourth block");

blockchain.getBlocks();

/*
[
  Block {
    prevHash: '',
    height: 1,
    data: 'first block',
    hash: '43c9a2b6cc008f3ae097d5e78f8860f6645910d75b758f8cd0ad15c82a7f90de'
  },
  Block {
    prevHash: '43c9a2b6cc008f3ae097d5e78f8860f6645910d75b758f8cd0ad15c82a7f90de',
    height: 2,
    data: 'second block',
    hash: 'ade63eb83f3e7df5fa3a2d3ac772cedde5d3266315c83e4b2906b7076a50a30f'
  },
  Block {
    prevHash: 'ade63eb83f3e7df5fa3a2d3ac772cedde5d3266315c83e4b2906b7076a50a30f',
    height: 3,
    data: 'third block',
    hash: 'f48103d105e70dc1db3745cd776b80fbbe36b84affcd5b6913f5375c332e79be'
  },
  Block {
    prevHash: 'f48103d105e70dc1db3745cd776b80fbbe36b84affcd5b6913f5375c332e79be',
    height: 4,
    data: 'fourth block',
    hash: '91cbfddd3a734a074bb6ff9df536dea3210fef069969beadcc6625cf7d27256e'
  }
]
*/
