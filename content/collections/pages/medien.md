---
id: e155b972-40ea-42ce-8529-6060832f1059
published: false
blueprint: page
title: Medien
updated_by: 3f4934a7-72ef-446c-bf12-5336d13e6898
updated_at: 1702540899
page_elements:
  -
    id: lpu0p3gx
    content:
      -
        type: heading
        attrs:
          level: 1
        content:
          -
            type: text
            text: Medien
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: Downloads
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: Handelsregisterauszug
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'statamic://asset::assets::downloads/test.pdf'
                  rel: null
                  target: _blank
                  title: null
            text: 'PDF herunterladen'
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: Logos
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'statamic://asset::assets::downloads/test.pdf'
                  rel: null
                  target: _blank
                  title: null
            text: 'Logo 1 herunterladen'
          -
            type: hardBreak
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'statamic://asset::assets::downloads/test.pdf'
                  rel: null
                  target: _blank
                  title: null
            text: 'Logo 2 herunterladen'
    type: editor
    enabled: true
  -
    id: lpu6fa2z
    content:
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: Medienartikel
      -
        type: set
        attrs:
          id: lpu6zgas
          values:
            type: media_download
            date: '2023-10-21'
            title: 'Medienartikel 2 Ime con recea quibus exerunt volenist ommo dolupta'
            link: 'asset::assets::dummy/dummy-3.jpg'
      -
        type: set
        attrs:
          id: lpu6yg3m
          values:
            type: media_download
            date: '2022-11-22'
            title: 'Medienartikel 1 Ime con recea quibus exerunt volenist ommo dolupta'
            link: 'asset::assets::downloads/test.pdf'
      -
        type: set
        attrs:
          id: lpu70t9w
          values:
            type: media_download
            date: '2022-11-22'
            title: 'Medienartikel 1 Ime con recea quibus exerunt volenist ommo dolupta'
            link: 'asset::assets::downloads/test.pdf'
    type: editor
    enabled: true
  -
    id: lpu70ivv
    content:
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: Medienmitteilungen
      -
        type: set
        attrs:
          id: lpu6zgas
          values:
            type: media_download
            date: '2023-10-21'
            title: 'Medienartikel 2 Ime con recea quibus exerunt volenist ommo dolupta'
            link: 'asset::assets::downloads/test.pdf'
      -
        type: set
        attrs:
          id: lpu70t9w
          values:
            type: media_download
            date: '2022-11-22'
            title: 'Medienartikel 1 Ime con recea quibus exerunt volenist ommo dolupta'
            link: 'asset::assets::dummy/dummy-1.jpg'
    type: editor
    enabled: true
page_theme: rose
---
