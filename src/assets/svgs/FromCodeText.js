import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FromCodeText = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            fill="#C6C6C6"
            d="M.84 2.142C.84.378 2.03 0 2.898 0c.434 0 .84.098 1.134.28v.938a2.15 2.15 0 0 0-.882-.196c-.672 0-1.12.336-1.12 1.26v.658h2.002v.966H2.03v6.314H.84V3.906H0V2.94h.84v-.798ZM5.196 10.22V2.94h1.176v1.806C6.638 3.696 7.366 2.8 8.71 2.8c.168 0 .308.014.42.056v1.106a1.723 1.723 0 0 0-.406-.042c-1.358 0-2.352 1.022-2.352 2.646v3.654H5.196ZM13.798 10.36c-1.89 0-3.78-1.344-3.78-3.78s1.89-3.78 3.78-3.78 3.78 1.344 3.78 3.78-1.89 3.78-3.78 3.78Zm-2.604-3.78c0 1.722 1.26 2.702 2.604 2.702s2.604-.98 2.604-2.702-1.26-2.702-2.604-2.702-2.604.98-2.604 2.702ZM23.841 10.22v-4.2c0-1.33-.602-2.142-1.764-2.142-1.176 0-1.876.812-1.876 2.142v4.2h-1.176V2.94h1.176v1.134c.35-.672 1.064-1.274 2.226-1.274 1.022 0 1.862.462 2.296 1.47.35-.742 1.134-1.47 2.478-1.47 1.512 0 2.632.966 2.632 3.136v4.284h-1.176v-4.2c0-1.33-.602-2.142-1.764-2.142-1.176 0-1.876.812-1.876 2.142v4.2h-1.176ZM39.682 10.36c-2.785 0-5.068-2.072-5.068-5.11 0-3.038 2.283-5.11 5.069-5.11 1.218 0 2.8.406 3.877 1.946l-.882.644c-.825-1.106-2.002-1.428-2.967-1.428-2.128 0-3.864 1.568-3.864 3.948 0 2.394 1.736 3.948 3.877 3.948.967 0 2.129-.322 2.955-1.428l.881.644c-1.078 1.54-2.646 1.946-3.878 1.946ZM48.223 10.36c-1.89 0-3.78-1.344-3.78-3.78s1.89-3.78 3.78-3.78 3.78 1.344 3.78 3.78-1.89 3.78-3.78 3.78Zm-2.604-3.78c0 1.722 1.26 2.702 2.604 2.702s2.604-.98 2.604-2.702-1.26-2.702-2.604-2.702-2.604.98-2.604 2.702ZM60.618 10.22h-1.175V8.848H59.4c-.35.77-1.373 1.512-2.73 1.512-1.764 0-3.57-1.288-3.57-3.78s1.806-3.78 3.57-3.78c1.358 0 2.38.742 2.73 1.512h.041V.28h1.176v9.94Zm-6.342-3.64c0 1.806 1.302 2.702 2.59 2.702 1.316 0 2.618-.91 2.618-2.702 0-1.792-1.302-2.702-2.617-2.702-1.288 0-2.59.896-2.59 2.702ZM65.797 10.36c-1.96 0-3.738-1.358-3.738-3.78 0-2.45 1.792-3.78 3.626-3.78 1.848 0 3.78 1.33 3.486 4.214h-5.992c.182 1.526 1.344 2.338 2.744 2.338.854 0 1.638-.308 2.17-.882l.588.602c-.658.812-1.708 1.288-2.884 1.288Zm-2.618-4.242h4.956c-.084-1.498-1.218-2.296-2.436-2.296-1.204 0-2.338.77-2.52 2.296ZM77.178.28h1.204l3.948 9.94h-1.302l-.896-2.296h-4.704l-.896 2.296H73.23L77.178.28Zm-1.316 6.524h3.836l-1.918-4.97-1.918 4.97ZM86.302 10.36c-1.89 0-3.78-1.344-3.78-3.78s1.89-3.78 3.78-3.78c1.26 0 2.45.602 3.108 1.792l-.896.532a2.526 2.526 0 0 0-2.198-1.246c-1.316 0-2.618.98-2.618 2.702S85 9.282 86.316 9.282c.91 0 1.736-.462 2.198-1.246l.896.532c-.658 1.176-1.848 1.792-3.108 1.792ZM93.956 10.36c-1.764 0-3.57-1.288-3.57-3.78s1.806-3.78 3.57-3.78c1.358 0 2.38.742 2.73 1.512h.042V2.94h1.176v7.28h-1.176V8.848h-.042c-.35.77-1.372 1.512-2.73 1.512Zm-2.394-3.78c0 1.806 1.302 2.702 2.59 2.702 1.316 0 2.618-.91 2.618-2.702 0-1.792-1.302-2.702-2.618-2.702-1.288 0-2.59.896-2.59 2.702ZM106.863 10.22h-1.176V8.848h-.042c-.35.77-1.372 1.512-2.73 1.512-1.764 0-3.57-1.288-3.57-3.78s1.806-3.78 3.57-3.78c1.358 0 2.38.742 2.73 1.512h.042V.28h1.176v9.94Zm-6.342-3.64c0 1.806 1.302 2.702 2.59 2.702 1.316 0 2.618-.91 2.618-2.702 0-1.792-1.302-2.702-2.618-2.702-1.288 0-2.59.896-2.59 2.702ZM112.041 10.36c-1.96 0-3.738-1.358-3.738-3.78 0-2.45 1.792-3.78 3.626-3.78 1.848 0 3.78 1.33 3.486 4.214h-5.992c.182 1.526 1.344 2.338 2.744 2.338.854 0 1.638-.308 2.17-.882l.588.602c-.658.812-1.708 1.288-2.884 1.288Zm-2.618-4.242h4.956c-.084-1.498-1.218-2.296-2.436-2.296-1.204 0-2.338.77-2.52 2.296ZM121.717 10.22v-4.2c0-1.33-.602-2.142-1.764-2.142-1.176 0-1.876.812-1.876 2.142v4.2h-1.176V2.94h1.176v1.134c.35-.672 1.064-1.274 2.226-1.274 1.022 0 1.862.462 2.296 1.47.35-.742 1.134-1.47 2.478-1.47 1.512 0 2.632.966 2.632 3.136v4.284h-1.176v-4.2c0-1.33-.602-2.142-1.764-2.142-1.176 0-1.876.812-1.876 2.142v4.2h-1.176ZM130.17 12.88l1.204-2.73-3.066-7.21h1.218l2.422 5.824 2.422-5.824h1.218l-3.094 7.28-1.162 2.66h-1.162Z"
        />
    </Svg>
)
export default FromCodeText