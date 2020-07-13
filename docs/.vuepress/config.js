module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/icone.png' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
        ['link', { rel :'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'}]      
    ],
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        extendMarkdown: md => {
          md.use(require("markdown-it-katex"));
        }
    },
    title: "Docs Egua",
    description: "Documentação dos módulos, ferramentas e linguagem do Egua",
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: "egua", link: '/egua/' },
            { text: "eguap", link: '/eguap/' },
            { text: "eguac", link: '/eguac/' },
            { text: "eguamat", link: '/eguamat/' },
            { text: "github", link: 'https://github.com/eguatech' }
        ],

        sidebar: {
            '/egua/': [
                '',
                'instalacao',
                'tipos_dados',
                'variaveis',
                'operadores',
                'fluxo_controle',
                'funcao',
                'classes',
                'importar'
            ],

            '/eguac/': [
                '',
                'main',
                'tipos_dados',
                'escreva',
                'entrada_dados',
                'condicionais',
                'laco_repeticao',
                'funcao'
            ],

            '/eguap/': [
                '',
                'textos',
                'matematica',
                'condicionais',
                'laco_repeticao',
                'lista',
                'funcoes'
            ],

            '/eguamat/': [
                '',
                'funcao1_2',
                'estatistica',
                'matrizes',
                'trigonometria',
                'cinematica',
                'controle'
            ],

            '/introducao/':[
                '',
                'IDEgua',
                'modulos',
                'contribuindo'
            ]

        },
        logo: "/images/logo.png"
    },
    base: "/docs/"
}
