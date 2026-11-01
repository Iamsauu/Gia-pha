# Genealogy Data Source

The current dataset was transcribed from the single-page **Gia Phả Nguyễn Văn.pdf** supplied on 2026-11-01. Both `family_tree.json` and the embedded `familyData` in `app.js` contain the same data. The source PDF remains outside the published repository.

## Reading the records

- `generation` records the printed generation; historical IDs are retained where a corresponding entry could be identified. An ID's spelling or generation prefix may therefore differ from the corrected record.
- `source` uses `page:generation.box`, with boxes numbered from left to right within each printed row. For example, `1:4.09` is the ninth box in generation four on page one.
- Several people can share a source box. They are separate siblings unless the chart identifies a couple. The four children named inside Bà Sắt's generation-four box use `1:4.14` while their generation is five.
- `bloodline` identifies the person belonging to the displayed branch (`husband` or `wife`). Spouses' names and IDs do not determine lineage.
- Multiple wives and their individual anniversary dates remain in the wife record's notes. Mother-specific groups, adopted children, deaths at young ages, and residence details are preserved in notes.

## Corrections and limits

The import replaces 157 entries with 231 entries spanning the five printed generations and covering all 127 boxes. It corrects the ancestor to Nguyễn Công Tự (Hiệu Phúc Ngôn), Nguyễn Văn Lượng's wife to Lê Thị Tân, and the branch heading to Nguyễn Văn Hỗ. It adds Nguyễn Văn Thìn and restores the Ngọ and Tự branches and the descendants of Nguyễn Thị Lượng.

Names omitted by the chart remain unknown. Ellipses in two generation-five boxes are recorded without inventing people. Nguyễn Văn Công is retained in Ngọ's notes as the younger brother named in that box; the chart does not specify his placement among all siblings. Further descendants mentioned only in notes, such as cô Dừa and Dũng Đen, remain notes rather than additional printed generations.

## Validation

Run `node --test tests/family-data.test.js` to check data synchronization, unique IDs, generation and date validity, source coverage, every printed parent connection, and female lineage in relationship comparisons. Also run `node --check app.js` and `git diff --check`.
