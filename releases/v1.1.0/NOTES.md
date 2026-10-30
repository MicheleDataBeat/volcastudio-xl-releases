# VolcaStudio XL 1.1.0

Released 30 October 2026 for the first-generation Korg volca sample.
A [DataBeat](https://micheledatabeat.github.io/) project by Michele Ibba.

## Two editions

- **VolcaStudio XL Desktop App**: a native desktop window.
- **VolcaStudio XL Browser App**: a locally installed application that opens
  in Google Chrome.

Both editions share libraries, kits, pattern banks and firmware on one
computer. Packages are named `VolcaStudio-XL-Desktop-1.1.0-<platform>` and
`VolcaStudio-XL-Browser-1.1.0-<platform>`.

## DataBeat OS 1.0, built on your computer

Studio contains no firmware. To install **DataBeat OS 1.0**, you download
Korg's official updater and Studio builds DataBeat OS from it:

1. Open Korg's [volca sample download page](https://www.korg.com/us/support/download/software/0/370/1475/),
   read Korg's licence agreement and download **System Updater 1.42**
   (`volcasample_updater_1_42.zip`). Keep the zip unchanged.
2. Add it: **Firmware → Choose the Korg 1.42 updater…** in the Browser App,
   **04 / Firmware → Add Korg 1.42 updater…** in the Desktop App.
3. Studio builds DataBeat OS 1.0 in a few seconds, without an internet
   connection, and checks the result against its pinned SHA-256.

The firmware list shows **DataBeat OS 1.0** and **Korg volca sample 1.42**, so
you can also return the instrument to Korg's own firmware. Install either with
the guided update (FUNC + PLAY → UPdt, then wait for End). At startup DataBeat
OS scrolls **dAtAbEAt OS**.

The [firmware guide](https://micheledatabeat.github.io/volcastudio-xl-releases/docs/firmware.html)
explains each step, with checksums. The
[DataBeat OS manual](https://micheledatabeat.github.io/volcastudio-xl-releases/docs/databeat-os.html)
describes the firmware's pages and controls.

## In this release

- One firmware entry, **DataBeat OS 1.0**, a production release accepted on
  the instrument; **Korg volca sample 1.42** remains available for returning.
- One pattern format, the **DataBeat OS 1.0 pattern format**, for backups,
  restores, neutral patterns and grooves. Banks in another format stay
  archived byte for byte; Studio does not convert banks.
- The groove editor works on DataBeat OS 1.0 patterns and changes only the
  microtiming bytes.
- Newly opened banks and newly built firmware stay visible when an older
  background refresh finishes later.
- Guides for the Desktop App, the Browser App, firmware, patterns and grooves;
  the DataBeat OS 1.0 manual is included in every package and on the download
  page.

## Installation

Download and extract the package for your computer, then open
**VolcaStudio XL Desktop App** or **VolcaStudio XL Browser App**. Install after
any transfer has finished. See the
[download page](https://micheledatabeat.github.io/volcastudio-xl-releases/).

Windows packages require x64; macOS packages require Apple silicon. Linux
packages require x86-64 and glibc 2.35 or later. The Browser App also requires
Google Chrome. Packages are unsigned: verify downloads against `SHA256SUMS`.

## Rights

Studio contains no Korg firmware. Korg's updater stays under Korg's licence
agreement on your computer. DataBeat OS is unofficial, keeps its own terms and
is not affiliated with or endorsed by Korg. See `THIRD_PARTY.md` in each
package.
