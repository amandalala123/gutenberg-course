// wp.block
import "./styles.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText, BlockControls, AlignmentToolbar } from "@wordpress/editor";
import { Toolbar, DropdownMenu } from "@wordpress/components";

registerBlockType("mytheme-blocks/secondblock", {
    title: __("Second Block", "mytheme-blocks"),
    description: __("My second block", "mytheme-blocks"),
    category: "layout",
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
        >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
    ),
    keywords: [__("photo", "mytheme-blocks"), __("image", "mytheme-blocks")],
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }, 
        alignment: {
            type: 'string'
        }
    },
    edit: ({ className, attributes, setAttributes }) => {
        const { content, alignment } = attributes;
        const onChangeContent = (content) => {
            setAttributes({ content })
        }
        const onChangeAlignment = ( alignment ) => {
            setAttributes({ alignment })
        }
        return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={alignment}
                    onChange={(v) => console.log(v)}
                />
            </BlockControls>
            <RichText 
                tagname="p"
                className = { className }
                onChange={ onChangeContent }
                value= {content}
                formattingControls={['bold']}
                style={ { textAlign: alignment } }

            />
        </>
        );
    },
    save: ({ attributes }) => {
        const { content, alignment } = attributes;
        return <RichText.Content
            tagName="p"
            value={ content } 
            style={ { textAlign: alignment } }
        />;
    }
});
