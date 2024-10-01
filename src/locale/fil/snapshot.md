# Filipino (fil) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                             | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ----------------------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | ika-1987                                                    | Invalid Date             |
|                                 |              | 0005-01-01T12:13:14.015Z | ika-5                                                       | Invalid Date             |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | ika-1987                                                    | Invalid Date             |
|                                 |              | 0005-01-01T12:13:14.015Z | ika-5                                                       | Invalid Date             |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | ika-2                                                       | Invalid Date             |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | Q1                                                          | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Q2                                                          | 2019-04-01T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | Unang sangkapat                                             | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | Ikalawang sangkapat                                         | Invalid Date             |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                           | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | ika-2                                                       | Invalid Date             |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | Q1                                                          | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Q2                                                          | 2019-04-01T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | Unang sangkapat                                             | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | Ikalawang sangkapat                                         | Invalid Date             |
| Month (formatting)              | Mo           | 2019-01-11T12:13:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-02-11T12:13:14.015Z | ika-2                                                       | Invalid Date             |
|                                 |              | 2019-03-11T12:13:14.015Z | ika-3                                                       | Invalid Date             |
|                                 |              | 2019-04-10T12:13:14.015Z | ika-4                                                       | Invalid Date             |
|                                 |              | 2019-05-10T12:13:14.015Z | ika-5                                                       | Invalid Date             |
|                                 |              | 2019-06-10T12:13:14.015Z | ika-6                                                       | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | ika-7                                                       | Invalid Date             |
|                                 |              | 2019-08-10T12:13:14.015Z | ika-8                                                       | Invalid Date             |
|                                 |              | 2019-09-10T12:13:14.015Z | ika-9                                                       | Invalid Date             |
|                                 |              | 2019-10-10T12:13:14.015Z | ika-10                                                      | Invalid Date             |
|                                 |              | 2019-11-10T12:13:14.015Z | ika-11                                                      | Invalid Date             |
|                                 |              | 2019-12-10T12:13:14.015Z | ika-12                                                      | Invalid Date             |
|                                 | MMM          | 2019-01-11T12:13:14.015Z | Enero                                                       | Invalid Date             |
|                                 |              | 2019-02-11T12:13:14.015Z | Peb                                                         | Invalid Date             |
|                                 |              | 2019-03-11T12:13:14.015Z | Marso                                                       | Invalid Date             |
|                                 |              | 2019-04-10T12:13:14.015Z | Abr                                                         | Invalid Date             |
|                                 |              | 2019-05-10T12:13:14.015Z | Mayo                                                        | Invalid Date             |
|                                 |              | 2019-06-10T12:13:14.015Z | Hun                                                         | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | Hul                                                         | Invalid Date             |
|                                 |              | 2019-08-10T12:13:14.015Z | Agosto                                                      | Invalid Date             |
|                                 |              | 2019-09-10T12:13:14.015Z | Set                                                         | Invalid Date             |
|                                 |              | 2019-10-10T12:13:14.015Z | Okt                                                         | Invalid Date             |
|                                 |              | 2019-11-10T12:13:14.015Z | Nob                                                         | Invalid Date             |
|                                 |              | 2019-12-10T12:13:14.015Z | Dis                                                         | Invalid Date             |
|                                 | MMMM         | 2019-01-11T12:13:14.015Z | Enero                                                       | Invalid Date             |
|                                 |              | 2019-02-11T12:13:14.015Z | Pebrero                                                     | Invalid Date             |
|                                 |              | 2019-03-11T12:13:14.015Z | Marso                                                       | Invalid Date             |
|                                 |              | 2019-04-10T12:13:14.015Z | Abril                                                       | Invalid Date             |
|                                 |              | 2019-05-10T12:13:14.015Z | Mayo                                                        | Invalid Date             |
|                                 |              | 2019-06-10T12:13:14.015Z | Hunyo                                                       | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | Hulyo                                                       | Invalid Date             |
|                                 |              | 2019-08-10T12:13:14.015Z | Agosto                                                      | Invalid Date             |
|                                 |              | 2019-09-10T12:13:14.015Z | Setyembre                                                   | Invalid Date             |
|                                 |              | 2019-10-10T12:13:14.015Z | Oktubre                                                     | Invalid Date             |
|                                 |              | 2019-11-10T12:13:14.015Z | Nobyembre                                                   | Invalid Date             |
|                                 |              | 2019-12-10T12:13:14.015Z | Disyembre                                                   | Invalid Date             |
|                                 | MMMMM        | 2019-01-11T12:13:14.015Z | J                                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-02-11T12:13:14.015Z | F                                                           | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-03-11T12:13:14.015Z | M                                                           | 2019-03-01T00:00:00.000Z |
|                                 |              | 2019-04-10T12:13:14.015Z | A                                                           | 2019-04-01T00:00:00.000Z |
|                                 |              | 2019-05-10T12:13:14.015Z | M                                                           | 2019-03-01T00:00:00.000Z |
|                                 |              | 2019-06-10T12:13:14.015Z | J                                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-08-10T12:13:14.015Z | A                                                           | 2019-04-01T00:00:00.000Z |
|                                 |              | 2019-09-10T12:13:14.015Z | S                                                           | 2019-09-01T00:00:00.000Z |
|                                 |              | 2019-10-10T12:13:14.015Z | O                                                           | 2019-10-01T00:00:00.000Z |
|                                 |              | 2019-11-10T12:13:14.015Z | N                                                           | 2019-11-01T00:00:00.000Z |
|                                 |              | 2019-12-10T12:13:14.015Z | D                                                           | 2019-12-01T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-01-11T12:13:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-02-11T12:13:14.015Z | ika-2                                                       | Invalid Date             |
|                                 |              | 2019-03-11T12:13:14.015Z | ika-3                                                       | Invalid Date             |
|                                 |              | 2019-04-10T12:13:14.015Z | ika-4                                                       | Invalid Date             |
|                                 |              | 2019-05-10T12:13:14.015Z | ika-5                                                       | Invalid Date             |
|                                 |              | 2019-06-10T12:13:14.015Z | ika-6                                                       | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | ika-7                                                       | Invalid Date             |
|                                 |              | 2019-08-10T12:13:14.015Z | ika-8                                                       | Invalid Date             |
|                                 |              | 2019-09-10T12:13:14.015Z | ika-9                                                       | Invalid Date             |
|                                 |              | 2019-10-10T12:13:14.015Z | ika-10                                                      | Invalid Date             |
|                                 |              | 2019-11-10T12:13:14.015Z | ika-11                                                      | Invalid Date             |
|                                 |              | 2019-12-10T12:13:14.015Z | ika-12                                                      | Invalid Date             |
|                                 | LLL          | 2019-01-11T12:13:14.015Z | Enero                                                       | Invalid Date             |
|                                 |              | 2019-02-11T12:13:14.015Z | Peb                                                         | Invalid Date             |
|                                 |              | 2019-03-11T12:13:14.015Z | Marso                                                       | Invalid Date             |
|                                 |              | 2019-04-10T12:13:14.015Z | Abr                                                         | Invalid Date             |
|                                 |              | 2019-05-10T12:13:14.015Z | Mayo                                                        | Invalid Date             |
|                                 |              | 2019-06-10T12:13:14.015Z | Hun                                                         | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | Hul                                                         | Invalid Date             |
|                                 |              | 2019-08-10T12:13:14.015Z | Agosto                                                      | Invalid Date             |
|                                 |              | 2019-09-10T12:13:14.015Z | Set                                                         | Invalid Date             |
|                                 |              | 2019-10-10T12:13:14.015Z | Okt                                                         | Invalid Date             |
|                                 |              | 2019-11-10T12:13:14.015Z | Nob                                                         | Invalid Date             |
|                                 |              | 2019-12-10T12:13:14.015Z | Dis                                                         | Invalid Date             |
|                                 | LLLL         | 2019-01-11T12:13:14.015Z | Enero                                                       | Invalid Date             |
|                                 |              | 2019-02-11T12:13:14.015Z | Pebrero                                                     | Invalid Date             |
|                                 |              | 2019-03-11T12:13:14.015Z | Marso                                                       | Invalid Date             |
|                                 |              | 2019-04-10T12:13:14.015Z | Abril                                                       | Invalid Date             |
|                                 |              | 2019-05-10T12:13:14.015Z | Mayo                                                        | Invalid Date             |
|                                 |              | 2019-06-10T12:13:14.015Z | Hunyo                                                       | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | Hulyo                                                       | Invalid Date             |
|                                 |              | 2019-08-10T12:13:14.015Z | Agosto                                                      | Invalid Date             |
|                                 |              | 2019-09-10T12:13:14.015Z | Setyembre                                                   | Invalid Date             |
|                                 |              | 2019-10-10T12:13:14.015Z | Oktubre                                                     | Invalid Date             |
|                                 |              | 2019-11-10T12:13:14.015Z | Nobyembre                                                   | Invalid Date             |
|                                 |              | 2019-12-10T12:13:14.015Z | Disyembre                                                   | Invalid Date             |
|                                 | LLLLL        | 2019-01-11T12:13:14.015Z | J                                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-02-11T12:13:14.015Z | F                                                           | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-03-11T12:13:14.015Z | M                                                           | 2019-03-01T00:00:00.000Z |
|                                 |              | 2019-04-10T12:13:14.015Z | A                                                           | 2019-04-01T00:00:00.000Z |
|                                 |              | 2019-05-10T12:13:14.015Z | M                                                           | 2019-03-01T00:00:00.000Z |
|                                 |              | 2019-06-10T12:13:14.015Z | J                                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-08-10T12:13:14.015Z | A                                                           | 2019-04-01T00:00:00.000Z |
|                                 |              | 2019-09-10T12:13:14.015Z | S                                                           | 2019-09-01T00:00:00.000Z |
|                                 |              | 2019-10-10T12:13:14.015Z | O                                                           | 2019-10-01T00:00:00.000Z |
|                                 |              | 2019-11-10T12:13:14.015Z | N                                                           | 2019-11-01T00:00:00.000Z |
|                                 |              | 2019-12-10T12:13:14.015Z | D                                                           | 2019-12-01T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-12-01T12:13:14.015Z | ika-49                                                      | Invalid Date             |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-12-01T12:13:14.015Z | ika-48                                                      | Invalid Date             |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | ika-11                                                      | Invalid Date             |
|                                 |              | 2019-02-28T12:13:14.015Z | ika-28                                                      | Invalid Date             |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | ika-42                                                      | Invalid Date             |
|                                 |              | 2019-12-31T12:13:14.015Z | ika-365                                                     | Invalid Date             |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | Lun                                                         | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biy                                                         | Invalid Date             |
|                                 | EE           | 2019-02-11T12:13:14.015Z | Lun                                                         | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biy                                                         | Invalid Date             |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | Lun                                                         | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biy                                                         | Invalid Date             |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | Lunes                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biyernes                                                    | Invalid Date             |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | L                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | B                                                           | Invalid Date             |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | Lu                                                          | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Bi                                                          | Invalid Date             |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | ika-5                                                       | Invalid Date             |
|                                 | iii          | 2019-02-11T12:13:14.015Z | Lun                                                         | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biy                                                         | Invalid Date             |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | Lunes                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biyernes                                                    | Invalid Date             |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | L                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | B                                                           | Invalid Date             |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | Lu                                                          | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Bi                                                          | Invalid Date             |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | ika-2                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | ika-6                                                       | Invalid Date             |
|                                 | eee          | 2019-02-11T12:13:14.015Z | Lun                                                         | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biy                                                         | Invalid Date             |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | Lunes                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biyernes                                                    | Invalid Date             |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | L                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | B                                                           | Invalid Date             |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | Lu                                                          | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Bi                                                          | Invalid Date             |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | ika-2                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | ika-6                                                       | Invalid Date             |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | Lun                                                         | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biy                                                         | Invalid Date             |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | Lunes                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Biyernes                                                    | Invalid Date             |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | L                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | B                                                           | Invalid Date             |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | Lu                                                          | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Bi                                                          | Invalid Date             |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 | aa           | 2019-02-11T11:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | am                                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                                          | 2019-02-11T00:00:00.000Z |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | a.m.                                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p.m.                                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p.m.                                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a.m.                                                        | 2019-02-11T00:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | a                                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p                                                           | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p                                                           | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a                                                           | 2019-02-11T00:00:00.000Z |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 | bb           | 2019-02-11T11:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                          | 2019-02-11T00:00:00.000Z |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | am                                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                                          | 2019-02-11T00:00:00.000Z |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | a.m.                                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p.m.                                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p.m.                                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a.m.                                                        | 2019-02-11T00:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | a                                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p                                                           | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p                                                           | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a                                                           | 2019-02-11T00:00:00.000Z |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | sa umaga                                                    | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | sa hapon                                                    | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 | BB           | 2019-02-11T11:13:14.015Z | sa umaga                                                    | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | sa hapon                                                    | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | sa umaga                                                    | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | sa hapon                                                    | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | sa umaga                                                    | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | sa hapon                                                    | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | sa umaga                                                    | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | sa hapon                                                    | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sa gabi                                                     | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | sa gabi                                                     | Invalid Date             |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | ika-11                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | ika-11                                                      | Invalid Date             |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | ika-11                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | ika-23                                                      | Invalid Date             |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | ika-11                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | ika-11                                                      | Invalid Date             |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | ika-11                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | ika-23                                                      | Invalid Date             |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:55:14.015Z | ika-55                                                      | Invalid Date             |
| Second                          | so           | 2019-01-01T12:13:01.015Z | ika-1                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:13:55.015Z | ika-55                                                      | Invalid Date             |
| Long localized date             | P            | 1987-01-11T12:13:14.015Z | 01/11/1987                                                  | 1987-01-11T00:00:00.000Z |
|                                 |              | 1987-02-11T12:13:14.015Z | 02/11/1987                                                  | 1987-02-11T00:00:00.000Z |
|                                 |              | 1987-03-11T12:13:14.015Z | 03/11/1987                                                  | 1987-03-11T00:00:00.000Z |
|                                 |              | 1987-04-11T12:13:14.015Z | 04/11/1987                                                  | 1987-04-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 05/29/1453                                                  | 1453-05-29T00:00:00.000Z |
|                                 |              | 1987-06-11T12:13:14.015Z | 06/11/1987                                                  | 1987-06-11T00:00:00.000Z |
|                                 |              | 1987-07-11T12:13:14.015Z | 07/11/1987                                                  | 1987-07-11T00:00:00.000Z |
|                                 |              | 1987-08-11T12:13:14.015Z | 08/11/1987                                                  | 1987-08-11T00:00:00.000Z |
|                                 |              | 1987-09-11T12:13:14.015Z | 09/11/1987                                                  | 1987-09-11T00:00:00.000Z |
|                                 |              | 1987-10-11T12:13:14.015Z | 10/11/1987                                                  | 1987-10-11T00:00:00.000Z |
|                                 |              | 1987-11-11T12:13:14.015Z | 11/11/1987                                                  | 1987-11-11T00:00:00.000Z |
|                                 |              | 1987-12-11T12:13:14.015Z | 12/11/1987                                                  | 1987-12-11T00:00:00.000Z |
|                                 | PP           | 1987-01-11T12:13:14.015Z | Enero 11, 1987                                              | Invalid Date             |
|                                 |              | 1987-02-11T12:13:14.015Z | Peb 11, 1987                                                | Invalid Date             |
|                                 |              | 1987-03-11T12:13:14.015Z | Marso 11, 1987                                              | Invalid Date             |
|                                 |              | 1987-04-11T12:13:14.015Z | Abr 11, 1987                                                | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Mayo 29, 1453                                               | Invalid Date             |
|                                 |              | 1987-06-11T12:13:14.015Z | Hun 11, 1987                                                | Invalid Date             |
|                                 |              | 1987-07-11T12:13:14.015Z | Hul 11, 1987                                                | Invalid Date             |
|                                 |              | 1987-08-11T12:13:14.015Z | Agosto 11, 1987                                             | Invalid Date             |
|                                 |              | 1987-09-11T12:13:14.015Z | Set 11, 1987                                                | Invalid Date             |
|                                 |              | 1987-10-11T12:13:14.015Z | Okt 11, 1987                                                | Invalid Date             |
|                                 |              | 1987-11-11T12:13:14.015Z | Nob 11, 1987                                                | Invalid Date             |
|                                 |              | 1987-12-11T12:13:14.015Z | Dis 11, 1987                                                | Invalid Date             |
|                                 | PPP          | 1987-01-11T12:13:14.015Z | Enero ika-11, 1987                                          | Invalid Date             |
|                                 |              | 1987-02-11T12:13:14.015Z | Pebrero ika-11, 1987                                        | Invalid Date             |
|                                 |              | 1987-03-11T12:13:14.015Z | Marso ika-11, 1987                                          | Invalid Date             |
|                                 |              | 1987-04-11T12:13:14.015Z | Abril ika-11, 1987                                          | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Mayo ika-29, 1453                                           | Invalid Date             |
|                                 |              | 1987-06-11T12:13:14.015Z | Hunyo ika-11, 1987                                          | Invalid Date             |
|                                 |              | 1987-07-11T12:13:14.015Z | Hulyo ika-11, 1987                                          | Invalid Date             |
|                                 |              | 1987-08-11T12:13:14.015Z | Agosto ika-11, 1987                                         | Invalid Date             |
|                                 |              | 1987-09-11T12:13:14.015Z | Setyembre ika-11, 1987                                      | Invalid Date             |
|                                 |              | 1987-10-11T12:13:14.015Z | Oktubre ika-11, 1987                                        | Invalid Date             |
|                                 |              | 1987-11-11T12:13:14.015Z | Nobyembre ika-11, 1987                                      | Invalid Date             |
|                                 |              | 1987-12-11T12:13:14.015Z | Disyembre ika-11, 1987                                      | Invalid Date             |
|                                 | PPPP         | 1987-01-11T12:13:14.015Z | Linggo, Enero ika-11, 1987                                  | Invalid Date             |
|                                 |              | 1987-02-11T12:13:14.015Z | Miyerkules, Pebrero ika-11, 1987                            | Invalid Date             |
|                                 |              | 1987-03-11T12:13:14.015Z | Miyerkules, Marso ika-11, 1987                              | Invalid Date             |
|                                 |              | 1987-04-11T12:13:14.015Z | Sabado, Abril ika-11, 1987                                  | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Linggo, Mayo ika-29, 1453                                   | Invalid Date             |
|                                 |              | 1987-06-11T12:13:14.015Z | Huwebes, Hunyo ika-11, 1987                                 | Invalid Date             |
|                                 |              | 1987-07-11T12:13:14.015Z | Sabado, Hulyo ika-11, 1987                                  | Invalid Date             |
|                                 |              | 1987-08-11T12:13:14.015Z | Martes, Agosto ika-11, 1987                                 | Invalid Date             |
|                                 |              | 1987-09-11T12:13:14.015Z | Biyernes, Setyembre ika-11, 1987                            | Invalid Date             |
|                                 |              | 1987-10-11T12:13:14.015Z | Linggo, Oktubre ika-11, 1987                                | Invalid Date             |
|                                 |              | 1987-11-11T12:13:14.015Z | Miyerkules, Nobyembre ika-11, 1987                          | Invalid Date             |
|                                 |              | 1987-12-11T12:13:14.015Z | Biyernes, Disyembre ika-11, 1987                            | Invalid Date             |
| Long localized time             | p            | 1987-01-11T12:13:14.015Z | 12:13 PM                                                    | 1987-01-11T12:13:00.000Z |
|                                 |              | 1987-02-11T12:13:14.015Z | 12:13 PM                                                    | 1987-02-11T12:13:00.000Z |
|                                 |              | 1987-03-11T12:13:14.015Z | 12:13 PM                                                    | 1987-03-11T12:13:00.000Z |
|                                 |              | 1987-04-11T12:13:14.015Z | 12:13 PM                                                    | 1987-04-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59 PM                                                    | 1453-05-29T23:59:00.000Z |
|                                 |              | 1987-06-11T12:13:14.015Z | 12:13 PM                                                    | 1987-06-11T12:13:00.000Z |
|                                 |              | 1987-07-11T12:13:14.015Z | 12:13 PM                                                    | 1987-07-11T12:13:00.000Z |
|                                 |              | 1987-08-11T12:13:14.015Z | 12:13 PM                                                    | 1987-08-11T12:13:00.000Z |
|                                 |              | 1987-09-11T12:13:14.015Z | 12:13 PM                                                    | 1987-09-11T12:13:00.000Z |
|                                 |              | 1987-10-11T12:13:14.015Z | 12:13 PM                                                    | 1987-10-11T12:13:00.000Z |
|                                 |              | 1987-11-11T12:13:14.015Z | 12:13 PM                                                    | 1987-11-11T12:13:00.000Z |
|                                 |              | 1987-12-11T12:13:14.015Z | 12:13 PM                                                    | 1987-12-11T12:13:00.000Z |
|                                 | pp           | 1987-01-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-01-11T12:13:14.000Z |
|                                 |              | 1987-02-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-02-11T12:13:14.000Z |
|                                 |              | 1987-03-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-03-11T12:13:14.000Z |
|                                 |              | 1987-04-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-04-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 PM                                                 | 1453-05-29T23:59:59.000Z |
|                                 |              | 1987-06-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-06-11T12:13:14.000Z |
|                                 |              | 1987-07-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-07-11T12:13:14.000Z |
|                                 |              | 1987-08-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-08-11T12:13:14.000Z |
|                                 |              | 1987-09-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-09-11T12:13:14.000Z |
|                                 |              | 1987-10-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-10-11T12:13:14.000Z |
|                                 |              | 1987-11-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-11-11T12:13:14.000Z |
|                                 |              | 1987-12-11T12:13:14.015Z | 12:13:14 PM                                                 | 1987-12-11T12:13:14.000Z |
|                                 | ppp          | 1987-01-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-02-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-03-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-04-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-06-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-07-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-08-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-09-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-10-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-11-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 |              | 1987-12-11T12:13:14.015Z | 12:13:14 PM GMT+0                                           | Errored                  |
|                                 | pppp         | 1987-01-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-02-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-03-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-04-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-06-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-07-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-08-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-09-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-10-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-11-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
|                                 |              | 1987-12-11T12:13:14.015Z | 12:13:14 PM GMT+00:00                                       | Errored                  |
| Combination of date and time    | Pp           | 1987-01-11T12:13:14.015Z | 01/11/1987, 12:13 PM                                        | 1987-01-11T12:13:00.000Z |
|                                 |              | 1987-02-11T12:13:14.015Z | 02/11/1987, 12:13 PM                                        | 1987-02-11T12:13:00.000Z |
|                                 |              | 1987-03-11T12:13:14.015Z | 03/11/1987, 12:13 PM                                        | 1987-03-11T12:13:00.000Z |
|                                 |              | 1987-04-11T12:13:14.015Z | 04/11/1987, 12:13 PM                                        | 1987-04-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 05/29/1453, 11:59 PM                                        | 1453-05-29T23:59:00.000Z |
|                                 |              | 1987-06-11T12:13:14.015Z | 06/11/1987, 12:13 PM                                        | 1987-06-11T12:13:00.000Z |
|                                 |              | 1987-07-11T12:13:14.015Z | 07/11/1987, 12:13 PM                                        | 1987-07-11T12:13:00.000Z |
|                                 |              | 1987-08-11T12:13:14.015Z | 08/11/1987, 12:13 PM                                        | 1987-08-11T12:13:00.000Z |
|                                 |              | 1987-09-11T12:13:14.015Z | 09/11/1987, 12:13 PM                                        | 1987-09-11T12:13:00.000Z |
|                                 |              | 1987-10-11T12:13:14.015Z | 10/11/1987, 12:13 PM                                        | 1987-10-11T12:13:00.000Z |
|                                 |              | 1987-11-11T12:13:14.015Z | 11/11/1987, 12:13 PM                                        | 1987-11-11T12:13:00.000Z |
|                                 |              | 1987-12-11T12:13:14.015Z | 12/11/1987, 12:13 PM                                        | 1987-12-11T12:13:00.000Z |
|                                 | PPpp         | 1987-01-11T12:13:14.015Z | Enero 11, 1987, 12:13:14 PM                                 | Invalid Date             |
|                                 |              | 1987-02-11T12:13:14.015Z | Peb 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 |              | 1987-03-11T12:13:14.015Z | Marso 11, 1987, 12:13:14 PM                                 | Invalid Date             |
|                                 |              | 1987-04-11T12:13:14.015Z | Abr 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Mayo 29, 1453, 11:59:59 PM                                  | Invalid Date             |
|                                 |              | 1987-06-11T12:13:14.015Z | Hun 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 |              | 1987-07-11T12:13:14.015Z | Hul 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 |              | 1987-08-11T12:13:14.015Z | Agosto 11, 1987, 12:13:14 PM                                | Invalid Date             |
|                                 |              | 1987-09-11T12:13:14.015Z | Set 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 |              | 1987-10-11T12:13:14.015Z | Okt 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 |              | 1987-11-11T12:13:14.015Z | Nob 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 |              | 1987-12-11T12:13:14.015Z | Dis 11, 1987, 12:13:14 PM                                   | Invalid Date             |
|                                 | PPPppp       | 1987-01-11T12:13:14.015Z | Enero ika-11, 1987 at 12:13:14 PM GMT+0                     | Invalid Date             |
|                                 |              | 1987-02-11T12:13:14.015Z | Pebrero ika-11, 1987 at 12:13:14 PM GMT+0                   | Invalid Date             |
|                                 |              | 1987-03-11T12:13:14.015Z | Marso ika-11, 1987 at 12:13:14 PM GMT+0                     | Invalid Date             |
|                                 |              | 1987-04-11T12:13:14.015Z | Abril ika-11, 1987 at 12:13:14 PM GMT+0                     | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Mayo ika-29, 1453 at 11:59:59 PM GMT+0                      | Invalid Date             |
|                                 |              | 1987-06-11T12:13:14.015Z | Hunyo ika-11, 1987 at 12:13:14 PM GMT+0                     | Invalid Date             |
|                                 |              | 1987-07-11T12:13:14.015Z | Hulyo ika-11, 1987 at 12:13:14 PM GMT+0                     | Invalid Date             |
|                                 |              | 1987-08-11T12:13:14.015Z | Agosto ika-11, 1987 at 12:13:14 PM GMT+0                    | Invalid Date             |
|                                 |              | 1987-09-11T12:13:14.015Z | Setyembre ika-11, 1987 at 12:13:14 PM GMT+0                 | Invalid Date             |
|                                 |              | 1987-10-11T12:13:14.015Z | Oktubre ika-11, 1987 at 12:13:14 PM GMT+0                   | Invalid Date             |
|                                 |              | 1987-11-11T12:13:14.015Z | Nobyembre ika-11, 1987 at 12:13:14 PM GMT+0                 | Invalid Date             |
|                                 |              | 1987-12-11T12:13:14.015Z | Disyembre ika-11, 1987 at 12:13:14 PM GMT+0                 | Invalid Date             |
|                                 | PPPPpppp     | 1987-01-11T12:13:14.015Z | Linggo, Enero ika-11, 1987 at 12:13:14 PM GMT+00:00         | Invalid Date             |
|                                 |              | 1987-02-11T12:13:14.015Z | Miyerkules, Pebrero ika-11, 1987 at 12:13:14 PM GMT+00:00   | Invalid Date             |
|                                 |              | 1987-03-11T12:13:14.015Z | Miyerkules, Marso ika-11, 1987 at 12:13:14 PM GMT+00:00     | Invalid Date             |
|                                 |              | 1987-04-11T12:13:14.015Z | Sabado, Abril ika-11, 1987 at 12:13:14 PM GMT+00:00         | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Linggo, Mayo ika-29, 1453 at 11:59:59 PM GMT+00:00          | Invalid Date             |
|                                 |              | 1987-06-11T12:13:14.015Z | Huwebes, Hunyo ika-11, 1987 at 12:13:14 PM GMT+00:00        | Invalid Date             |
|                                 |              | 1987-07-11T12:13:14.015Z | Sabado, Hulyo ika-11, 1987 at 12:13:14 PM GMT+00:00         | Invalid Date             |
|                                 |              | 1987-08-11T12:13:14.015Z | Martes, Agosto ika-11, 1987 at 12:13:14 PM GMT+00:00        | Invalid Date             |
|                                 |              | 1987-09-11T12:13:14.015Z | Biyernes, Setyembre ika-11, 1987 at 12:13:14 PM GMT+00:00   | Invalid Date             |
|                                 |              | 1987-10-11T12:13:14.015Z | Linggo, Oktubre ika-11, 1987 at 12:13:14 PM GMT+00:00       | Invalid Date             |
|                                 |              | 1987-11-11T12:13:14.015Z | Miyerkules, Nobyembre ika-11, 1987 at 12:13:14 PM GMT+00:00 | Invalid Date             |
|                                 |              | 1987-12-11T12:13:14.015Z | Biyernes, Disyembre ika-11, 1987 at 12:13:14 PM GMT+00:00   | Invalid Date             |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result                 | `includeSeconds: true`  | `addSuffix: true`               |
| ------------------------ | ---------------------- | ----------------------- | ------------------------------- |
| 2006-01-01T00:00:00.000Z | mga 6 na taon          | mga 6 na taon           | sa mga 6 na taon                |
| 2005-01-01T00:00:00.000Z | mga 5 na taon          | mga 5 na taon           | sa mga 5 na taon                |
| 2004-01-01T00:00:00.000Z | mga 4 na taon          | mga 4 na taon           | sa mga 4 na taon                |
| 2003-01-01T00:00:00.000Z | mga 3 na taon          | mga 3 na taon           | sa mga 3 na taon                |
| 2002-01-01T00:00:00.000Z | mga 2 na taon          | mga 2 na taon           | sa mga 2 na taon                |
| 2001-06-01T00:00:00.000Z | mahigit isang taon     | mahigit isang taon      | sa mahigit isang taon           |
| 2001-02-01T00:00:00.000Z | mga isang taon         | mga isang taon          | sa mga isang taon               |
| 2001-01-01T00:00:00.000Z | mga isang taon         | mga isang taon          | sa mga isang taon               |
| 2000-06-01T00:00:00.000Z | 5 na buwan             | 5 na buwan              | sa 5 na buwan                   |
| 2000-03-01T00:00:00.000Z | 2 na buwan             | 2 na buwan              | sa 2 na buwan                   |
| 2000-02-01T00:00:00.000Z | mga isang buwan        | mga isang buwan         | sa mga isang buwan              |
| 2000-01-15T00:00:00.000Z | 14 na araw             | 14 na araw              | sa 14 na araw                   |
| 2000-01-02T00:00:00.000Z | isang araw             | isang araw              | sa isang araw                   |
| 2000-01-01T06:00:00.000Z | mga 6 na oras          | mga 6 na oras           | sa mga 6 na oras                |
| 2000-01-01T01:00:00.000Z | mga isang oras         | mga isang oras          | sa mga isang oras               |
| 2000-01-01T00:45:00.000Z | mga isang oras         | mga isang oras          | sa mga isang oras               |
| 2000-01-01T00:30:00.000Z | 30 minuto              | 30 minuto               | sa 30 minuto                    |
| 2000-01-01T00:15:00.000Z | 15 minuto              | 15 minuto               | sa 15 minuto                    |
| 2000-01-01T00:01:00.000Z | isang minuto           | isang minuto            | sa isang minuto                 |
| 2000-01-01T00:00:25.000Z | wala pang isang minuto | kalahating minuto       | sa wala pang isang minuto       |
| 2000-01-01T00:00:15.000Z | wala pang isang minuto | wala pang 20 na segundo | sa wala pang isang minuto       |
| 2000-01-01T00:00:05.000Z | wala pang isang minuto | wala pang 10 na segundo | sa wala pang isang minuto       |
| 2000-01-01T00:00:00.000Z | wala pang isang minuto | wala pang 5 na segundo  | wala pang isang minuto nakaraan |
| 1999-12-31T23:59:55.000Z | wala pang isang minuto | wala pang 10 na segundo | wala pang isang minuto nakaraan |
| 1999-12-31T23:59:45.000Z | wala pang isang minuto | wala pang 20 na segundo | wala pang isang minuto nakaraan |
| 1999-12-31T23:59:35.000Z | wala pang isang minuto | kalahating minuto       | wala pang isang minuto nakaraan |
| 1999-12-31T23:59:00.000Z | isang minuto           | isang minuto            | isang minuto nakaraan           |
| 1999-12-31T23:45:00.000Z | 15 minuto              | 15 minuto               | 15 minuto nakaraan              |
| 1999-12-31T23:30:00.000Z | 30 minuto              | 30 minuto               | 30 minuto nakaraan              |
| 1999-12-31T23:15:00.000Z | mga isang oras         | mga isang oras          | mga isang oras nakaraan         |
| 1999-12-31T23:00:00.000Z | mga isang oras         | mga isang oras          | mga isang oras nakaraan         |
| 1999-12-31T18:00:00.000Z | mga 6 na oras          | mga 6 na oras           | mga 6 na oras nakaraan          |
| 1999-12-30T00:00:00.000Z | 2 na araw              | 2 na araw               | 2 na araw nakaraan              |
| 1999-12-15T00:00:00.000Z | 17 na araw             | 17 na araw              | 17 na araw nakaraan             |
| 1999-12-01T00:00:00.000Z | mga isang buwan        | mga isang buwan         | mga isang buwan nakaraan        |
| 1999-11-01T00:00:00.000Z | 2 na buwan             | 2 na buwan              | 2 na buwan nakaraan             |
| 1999-06-01T00:00:00.000Z | 7 na buwan             | 7 na buwan              | 7 na buwan nakaraan             |
| 1999-01-01T00:00:00.000Z | mga isang taon         | mga isang taon          | mga isang taon nakaraan         |
| 1998-12-01T00:00:00.000Z | mga isang taon         | mga isang taon          | mga isang taon nakaraan         |
| 1998-06-01T00:00:00.000Z | mahigit isang taon     | mahigit isang taon      | mahigit isang taon nakaraan     |
| 1998-01-01T00:00:00.000Z | mga 2 na taon          | mga 2 na taon           | mga 2 na taon nakaraan          |
| 1997-01-01T00:00:00.000Z | mga 3 na taon          | mga 3 na taon           | mga 3 na taon nakaraan          |
| 1996-01-01T00:00:00.000Z | mga 4 na taon          | mga 4 na taon           | mga 4 na taon nakaraan          |
| 1995-01-01T00:00:00.000Z | mga 5 na taon          | mga 5 na taon           | mga 5 na taon nakaraan          |
| 1994-01-01T00:00:00.000Z | mga 6 na taon          | mga 6 na taon           | mga 6 na taon nakaraan          |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result       | `addSuffix: true`     | With forced unit (i.e. `hour`) |
| ------------------------ | ------------ | --------------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 na taon    | sa 6 na taon          | 52608 na oras                  |
| 2005-01-01T00:00:00.000Z | 5 na taon    | sa 5 na taon          | 43848 na oras                  |
| 2004-01-01T00:00:00.000Z | 4 na taon    | sa 4 na taon          | 35064 na oras                  |
| 2003-01-01T00:00:00.000Z | 3 na taon    | sa 3 na taon          | 26304 na oras                  |
| 2002-01-01T00:00:00.000Z | 2 na taon    | sa 2 na taon          | 17544 na oras                  |
| 2001-06-01T00:00:00.000Z | isang taon   | sa isang taon         | 12408 na oras                  |
| 2001-02-01T00:00:00.000Z | isang taon   | sa isang taon         | 9528 na oras                   |
| 2001-01-01T00:00:00.000Z | isang taon   | sa isang taon         | 8784 na oras                   |
| 2000-06-01T00:00:00.000Z | 5 na buwan   | sa 5 na buwan         | 3648 na oras                   |
| 2000-03-01T00:00:00.000Z | 2 na buwan   | sa 2 na buwan         | 1440 na oras                   |
| 2000-02-01T00:00:00.000Z | isang buwan  | sa isang buwan        | 744 na oras                    |
| 2000-01-15T00:00:00.000Z | 14 na araw   | sa 14 na araw         | 336 na oras                    |
| 2000-01-02T00:00:00.000Z | isang araw   | sa isang araw         | 24 na oras                     |
| 2000-01-01T06:00:00.000Z | 6 na oras    | sa 6 na oras          | 6 na oras                      |
| 2000-01-01T01:00:00.000Z | isang oras   | sa isang oras         | isang oras                     |
| 2000-01-01T00:45:00.000Z | 45 minuto    | sa 45 minuto          | isang oras                     |
| 2000-01-01T00:30:00.000Z | 30 minuto    | sa 30 minuto          | isang oras                     |
| 2000-01-01T00:15:00.000Z | 15 minuto    | sa 15 minuto          | 0 na oras                      |
| 2000-01-01T00:01:00.000Z | isang minuto | sa isang minuto       | 0 na oras                      |
| 2000-01-01T00:00:25.000Z | 25 segundo   | sa 25 segundo         | 0 na oras                      |
| 2000-01-01T00:00:15.000Z | 15 segundo   | sa 15 segundo         | 0 na oras                      |
| 2000-01-01T00:00:05.000Z | 5 segundo    | sa 5 segundo          | 0 na oras                      |
| 2000-01-01T00:00:00.000Z | 0 segundo    | 0 segundo nakaraan    | 0 na oras                      |
| 1999-12-31T23:59:55.000Z | 5 segundo    | 5 segundo nakaraan    | 0 na oras                      |
| 1999-12-31T23:59:45.000Z | 15 segundo   | 15 segundo nakaraan   | 0 na oras                      |
| 1999-12-31T23:59:35.000Z | 25 segundo   | 25 segundo nakaraan   | 0 na oras                      |
| 1999-12-31T23:59:00.000Z | isang minuto | isang minuto nakaraan | 0 na oras                      |
| 1999-12-31T23:45:00.000Z | 15 minuto    | 15 minuto nakaraan    | 0 na oras                      |
| 1999-12-31T23:30:00.000Z | 30 minuto    | 30 minuto nakaraan    | isang oras                     |
| 1999-12-31T23:15:00.000Z | 45 minuto    | 45 minuto nakaraan    | isang oras                     |
| 1999-12-31T23:00:00.000Z | isang oras   | isang oras nakaraan   | isang oras                     |
| 1999-12-31T18:00:00.000Z | 6 na oras    | 6 na oras nakaraan    | 6 na oras                      |
| 1999-12-30T00:00:00.000Z | 2 na araw    | 2 na araw nakaraan    | 48 na oras                     |
| 1999-12-15T00:00:00.000Z | 17 na araw   | 17 na araw nakaraan   | 408 na oras                    |
| 1999-12-01T00:00:00.000Z | isang buwan  | isang buwan nakaraan  | 744 na oras                    |
| 1999-11-01T00:00:00.000Z | 2 na buwan   | 2 na buwan nakaraan   | 1464 na oras                   |
| 1999-06-01T00:00:00.000Z | 7 na buwan   | 7 na buwan nakaraan   | 5136 na oras                   |
| 1999-01-01T00:00:00.000Z | isang taon   | isang taon nakaraan   | 8760 na oras                   |
| 1998-12-01T00:00:00.000Z | isang taon   | isang taon nakaraan   | 9504 na oras                   |
| 1998-06-01T00:00:00.000Z | 2 na taon    | 2 na taon nakaraan    | 13896 na oras                  |
| 1998-01-01T00:00:00.000Z | 2 na taon    | 2 na taon nakaraan    | 17520 na oras                  |
| 1997-01-01T00:00:00.000Z | 3 na taon    | 3 na taon nakaraan    | 26280 na oras                  |
| 1996-01-01T00:00:00.000Z | 4 na taon    | 4 na taon nakaraan    | 35064 na oras                  |
| 1995-01-01T00:00:00.000Z | 5 na taon    | 5 na taon nakaraan    | 43824 na oras                  |
| 1994-01-01T00:00:00.000Z | 6 na taon    | 6 na taon nakaraan    | 52584 na oras                  |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                 |
| ------------------------ | ---------------------- |
| 2000-01-10T00:00:00.000Z | 01/10/2000             |
| 2000-01-05T00:00:00.000Z | Miyerkules at 12:00 AM |
| 2000-01-02T00:00:00.000Z | tomorrow at 12:00 AM   |
| 2000-01-01T00:00:00.000Z | today at 12:00 AM      |
| 1999-12-31T00:00:00.000Z | yesterday at 12:00 AM  |
| 1999-12-27T00:00:00.000Z | last Lunes at 12:00 AM |
| 1999-12-21T00:00:00.000Z | 12/21/1999             |

## `formatDuration`

| Duration      | Result        |
| ------------- | ------------- |
| {"years":0}   | 0 na taon     |
| {"years":1}   | isang taon    |
| {"years":2}   | 2 na taon     |
| {"months":0}  | 0 na buwan    |
| {"months":1}  | isang buwan   |
| {"months":2}  | 2 na buwan    |
| {"weeks":0}   | 0 na linggo   |
| {"weeks":1}   | isang linggo  |
| {"weeks":2}   | 2 na linggo   |
| {"days":0}    | 0 na araw     |
| {"days":1}    | isang araw    |
| {"days":2}    | 2 na araw     |
| {"hours":0}   | 0 na oras     |
| {"hours":1}   | isang oras    |
| {"hours":2}   | 2 na oras     |
| {"minutes":0} | 0 minuto      |
| {"minutes":1} | isang minuto  |
| {"minutes":2} | 2 minuto      |
| {"seconds":0} | 0 segundo     |
| {"seconds":1} | isang segundo |
| {"seconds":2} | 2 segundo     |