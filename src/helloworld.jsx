import m from 'mithril'

export default {
    view(vnode) {
        return (
            <div class="pa4 tc">
                <h1>Hello World !</h1>
                <h3>and also to {vnode.attrs.name}</h3>
            </div>
        )
    }
}

