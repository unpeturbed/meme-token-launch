'use client'

import React, { useState } from 'react'
import ConnectWalletDialog from '@/components/ui/dialog/connectWalletDialog'
import Metamask from '@/components/icons/Metamask'
import { Button } from '@/components/ui/button'

const ConnectWalletButton: React.FC = () => {
  const [dialog, setDialog] = useState<boolean>(false)

  return (
    <div className="">
      {dialog && (
        <ConnectWalletDialog
          closeDialog={() => setDialog(false)}
          open={dialog}
        />
      )}
      <Button
        className="mt-5 bg-white text-2xl text-black before:w-[228px] active:bg-slate-400"
        type="submit"
        variant={'outline'}
        onClick={() => setDialog(true)}
      >
        <Metamask className="w-5 mr-2" /> Connect wallet
      </Button>
    </div>
  )
}

export default ConnectWalletButton
