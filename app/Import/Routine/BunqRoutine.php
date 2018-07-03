<?php
/**
 * BunqRoutine.php
 * Copyright (c) 2018 thegrumpydictator@gmail.com
 *
 * This file is part of Firefly III.
 *
 * Firefly III is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Firefly III is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Firefly III. If not, see <http://www.gnu.org/licenses/>.
 */

declare(strict_types=1);

namespace FireflyIII\Import\Routine;

use FireflyIII\Exceptions\FireflyException;
use FireflyIII\Models\ImportJob;
use FireflyIII\Repositories\ImportJob\ImportJobRepositoryInterface;
use FireflyIII\Support\Import\Routine\Bunq\StageImportDataHandler;
use FireflyIII\Support\Import\Routine\Bunq\StageNewHandler;
use Log;

/**
 * Class BunqRoutine
 */
class BunqRoutine implements RoutineInterface
{
    /** @var ImportJob */
    private $importJob;

    /** @var ImportJobRepositoryInterface */
    private $repository;

    /**
     * At the end of each run(), the import routine must set the job to the expected status.
     *
     * The final status of the routine must be "provider_finished".
     *
     * @throws FireflyException
     */
    public function run(): void
    {
        Log::debug(sprintf('Now in SpectreRoutine::run() with status "%s" and stage "%s".', $this->importJob->status, $this->importJob->stage));
        $valid = ['ready_to_run']; // should be only ready_to_run
        if (\in_array($this->importJob->status, $valid, true)) {
            switch ($this->importJob->stage) {
                default:
                    throw new FireflyException(sprintf('SpectreRoutine cannot handle stage "%s".', $this->importJob->stage)); // @codeCoverageIgnore
                case 'new':
                    // list all of the users accounts.
                    $this->repository->setStatus($this->importJob, 'running');
                    /** @var StageNewHandler $handler */
                    $handler = app(StageNewHandler::class);
                    $handler->setImportJob($this->importJob);
                    $handler->run();

                    // make user choose accounts to import from.
                    $this->repository->setStage($this->importJob, 'choose-accounts');
                    $this->repository->setStatus($this->importJob, 'need_job_config');

                    return;
                case 'go-for-import':
                    // list all of the users accounts.
                    $this->repository->setStatus($this->importJob, 'running');

                    /** @var StageImportDataHandler $handler */
                    $handler = app(StageImportDataHandler::class);
                    $handler->setImportJob($this->importJob);
                    $handler->run();
                    $transactions = $handler->getTransactions();

                    $this->repository->setTransactions($this->importJob, $transactions);
                    $this->repository->setStatus($this->importJob, 'provider_finished');
                    $this->repository->setStage($this->importJob, 'final');

                    return;
            }
        }
        throw new FireflyException(sprintf('bunq import routine cannot handle status "%s"', $this->importJob->status)); // @codeCoverageIgnore
    }


    /**
     * @param ImportJob $importJob
     *
     * @return void
     */
    public function setImportJob(ImportJob $importJob): void
    {
        $this->importJob  = $importJob;
        $this->repository = app(ImportJobRepositoryInterface::class);
        $this->repository->setUser($importJob->user);
    }

}