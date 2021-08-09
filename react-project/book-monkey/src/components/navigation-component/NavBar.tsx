import React, { ReactElement } from 'react'
import { Menu } from 'semantic-ui-react'

interface Props {
    onHome: () => void
    onShowList: () => void
}

export default function NavBar(props: Props): ReactElement {
    const onHome = props.onHome
    const onShowList = props.onShowList
    return (
        <Menu pointing secondary>
            <Menu.Item name='home' icon='home' onClick={onHome} />
            <Menu.Item name='books' icon='book' onClick={onShowList} />
        </Menu>
    )
}
