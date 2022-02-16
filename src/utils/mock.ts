export interface IMetaData {
    id: number,
    title: string;
    name: string;
    description: string;
    image: string;
    attributes: Array<{ [key: string]: string }>;
    version: number;
    // eslint-disable-next-line camelcase
    external_url?: string;
}

export const mock: { [key: string]: IMetaData[] } = {
    meta: [
        {
            id: 1,
            title: "Bradely Cooper",
            name: "Bradely Cooper #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://mtdata.ru/u21/photo341B/20702758225-0/original.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Bradely Cooper"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "portrait"}
            ],
            version: 1,
            external_url: "https://punkscomic.com",

        },
        {
            id: 2,
            title: "Natali Portman",
            name: "Natali Portman #2",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://24-info.pro/uploads/posts/2021-01/rossija-ili-izrail-gde-zhenschiny-krasivee-5.png",
            attributes: [
                {"trait_type": "Sex", "value": "female"},
                {"trait_type": "Name", "value": "Natali Portman"},
                {"trait_type": "MediaType", "value": "gif"},
                {"trait_type": "CollType", "value": "merch"}
            ],
            version: 1
        },
        {
            id: 3,
            title: "Will Smith",
            name: "Will Smith #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://epmgaa.media.clients.ellingtoncms.com/img/photos/2015/09/25/Will_Smith.jpg.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Will Smith"},
                {"trait_type": "MediaType", "value": "video"},
                {"trait_type": "CollType", "value": "congratulation"}
            ],
            version: 1
        },
        {
            id: 4,
            title: "Justin Timberlake",
            name: "Justin Timberlake #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://3.bp.blogspot.com/-AiDwnmwIpNE/WpAa15IqhuI/AAAAAAAAGP4/foQOiiry8MgOIYaKZmoXybfIIoaYblaawCLcBGAs/s1600/Justin%2BTimberlake.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Justin Timberlake"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "authograph"}
            ],
            version: 1
        },
        {
            id: 5,
            title: "Eugeni Chebatkov",
            name: "JEugeni Chebatkov #2",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://click-or-die.ru/app/uploads/2021/03/image-42.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Eugeni Chebatkov"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "portrait"}
            ],
            version: 1
        }, {
            id: 6,
            title: "Eugeni Chebatkov",
            name: "JEugeni Chebatkov #2",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://img.the-village-kz.com/the-village.com.kz/post-og_image/XmzQ2-B6Sgc9LupbuI39bA.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Eugeni Chebatkov"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "merch"}
            ],
            version: 1
        }, {
            id: 7,
            title: "Selena Gomez",
            name: "Selena Gomez #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://i.redd.it/ujseccxhwn441.png",
            attributes: [
                {"trait_type": "Sex", "value": "female"},
                {"trait_type": "Name", "value": "Selena Gomez"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "portrait"}
            ],
            version: 1
        }, {
            id: 8,
            title: "Cristiano Ronaldo",
            name: "Cristiano Ronaldo #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://www.opopular.com.br/polopoly_fs/1.1814415.1559768597!/image/image.PNG_gen/derivatives/landscape_800/image.PNG",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Cristiano Ronaldo"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "portrait"}
            ],
            version: 1
        }, {
            id: 9,
            title: "Cristiano Ronaldo",
            name: "Cristiano Ronaldo #2",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://cdn.infooggi.it/images/uploads/public/5d9/a5b/da2/thumb_114751_1024_0_0_0_auto.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Cristiano Ronaldo"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "celebration"}
            ],
            version: 1
        },
        {
            id: 10,
            title: "Cristiano Ronaldo",
            name: "Cristiano Ronaldo #3",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://www.shoes-report.ru/upload/iblock/57d/cr7_by_cristiano_ronaldo_zapuskaet_obuvnuyu_lineyku.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Cristiano Ronaldo"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "merch"}
            ],
            version: 1
        },
        {
            id: 11,
            title: "Lionel Messi",
            name: "Lionel Messi #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://nedvijdom.ru/wp-content/uploads/2019/06/1666600-35330546-1600-900.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Lionel Messi"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "merch"}
            ],
            version: 1
        },
        {
            id: 12,
            title: "Lionel Messi",
            name: "Lionel Messi #2",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://c2.hoopchina.com.cn/uploads/star/event/images/200131/ee2aa55476561a7fe98d9348ab2e2adee65e6b7d.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Lionel Messi"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "portrait"}
            ],
            version: 1
        },
        {
            id: 13,
            title: "Lionel Messi",
            name: "Lionel Messi #3",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://1ul.ru/upload/file/publication/Screenshot_1_4.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Lionel Messi"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "celebration"}
            ],
            version: 1
        },
        {
            id: 14,
            title: "Lionel Messi",
            name: "Lionel Messi #4",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://krisnawiratama88.files.wordpress.com/2013/10/mss.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Lionel Messi"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "boots"}
            ],
            version: 1
        },
        {
            id: 15,
            title: "Cristiano Ronaldo",
            name: "Cristiano Ronaldo #4",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://pbs.twimg.com/media/EAo8bGzXUAATaRc.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Cristiano Ronaldo"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "boots"}
            ],
            version: 1
        },
        {
            id: 16,
            title: "Brad Pitt",
            name: "Brad Pitt #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://www.glitzafrica.com/wp-content/uploads/2020/07/Bra-1.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Brad Pitt"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "portrait"}
            ],
            version: 1
        },
        {
            id: 17,
            title: "Brad Pitt",
            name: "Brad Pitt #2",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://kak2z.ru/my_img/img/2016/08/28/ab73e.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Brad Pitt"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "yong"}
            ],
            version: 1
        },
        {
            id: 18,
            title: "Rafael Nadal",
            name: "Rafael Nadal #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://rafaelnadalfans.com/wp-content/uploads/2018/12/Rafael-Nadal-vs-Kevin-Anderson-in-Mubadala-World-Tennis-Championship-semi-final-15.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Rafael Nadal"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "portrait"}
            ],
            version: 1
        },
        {
            id: 19,
            title: "Rafael Nadal",
            name: "Rafael Nadal #2",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://rafaelnadalfans.com/wp-content/uploads/2019/07/rafael-nadal-racket-babolat-for-wimbledon-2019-photo.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Rafael Nadal"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "racket"}
            ],
            version: 1
        },
        {
            id: 20,
            title: "Jorge Martin",
            name: "Jorge Martin #1",
            description: "OpenSpace is a space where you can watch the stars",
            image: "https://www.pngitem.com/pimgs/m/375-3750585_autograph-of-priyanka-chopra-hd-png-download.png",
            attributes: [
                {"trait_type": "Sex", "value": "male"},
                {"trait_type": "Name", "value": "Jorge Martin"},
                {"trait_type": "MediaType", "value": "picture"},
                {"trait_type": "CollType", "value": "autograph"}
            ],
            version: 1
        }
    ]
}



