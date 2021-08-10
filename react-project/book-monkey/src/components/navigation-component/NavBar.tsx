import React, { ReactElement } from 'react'
import { Menu } from 'semantic-ui-react'

interface Props {
    onShowHome: () => void
    onShowList: () => void
}

export default function NavBar(props: Props): ReactElement {
    const onShowHome = props.onShowHome
    const onShowList = props.onShowList
    return (
        <Menu pointing secondary>
            <Menu.Item name='home' icon='home' onClick={onShowHome} />
            <Menu.Item name='books' icon='book' onClick={onShowList} />
        </Menu>
    )
}